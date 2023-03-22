import { FC, useEffect, useReducer } from 'react';
import CookieJS from 'js-cookie';
import { CartContext, CartReducer } from 'context/cart/index'
import { ICartProduct, IOrderSummary } from '@interfaces/index'

type CartProviderProps = {
  children: React.ReactNode
}

export interface CartState {
  cart: ICartProduct[],
  summary: IOrderSummary
}

const INITIAL_STATE: CartState = {
  cart: [],
  summary: {
    numberOfItems: 0,
    subTotal: 0,
    taxes: 0,
    total: 0
  }
}

export const CartProvider: FC<CartProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE)

  useEffect(() => {
    try {
      const cookiesProducts = CookieJS.get('cart') ? JSON.parse(CookieJS.get('cart')!) : []  
      dispatch({ type: '[CART] - LoadCart from cookies | storage', payload: cookiesProducts })      
    } catch (error) {
      dispatch({ type: '[CART] - LoadCart from cookies | storage', payload: [] })
    }
  }, [])

  useEffect(() => {
    CookieJS.set('cart', JSON.stringify(state.cart))
  }, [state.cart])

  useEffect(() => {
    const numberOfItems = state.cart.reduce( (prev, curr) => prev + curr.quantity, 0 );
    const subTotal = state.cart.reduce( (prev, curr) => prev + (curr.quantity * curr.price) , 0);
    const taxes = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0) * subTotal
    const total = (subTotal + taxes);

    const orderSummary = {
      numberOfItems,
      subTotal,
      taxes,
      total
    }
  }, [state.cart]);
  

  const addProductToCart = (product: ICartProduct) => {
    const isProductInCart = state.cart.some(p => p._id === product._id && p.size === product.size);

    if(!isProductInCart) 
      return dispatch({ type: '[CART] - Update products in cart', payload: [...state.cart, product] })

    const updatedProductWithSize = state.cart.map(p => {
      if(p._id === product._id && p.size === product.size)
       return { ...p, quantity: p.quantity + product.quantity }
      
      return p;
    });

    dispatch({type: '[CART] - Update products in cart', payload: [...updatedProductWithSize]})
  }

  const loadProductCart = (): ICartProduct[] => {
    return state.cart;
  }

  const updateQuantity = (product: ICartProduct) => {
    dispatch({ type: '[CART] - Change product quantity in cart', payload: product })
  }

  const removeProductCart = (product: ICartProduct) => {
    dispatch({ type: '[CART] - Delete product in cart', payload: product })
  }
  
  return (
    <CartContext.Provider value={{ ...state, addProductToCart, loadProductCart, updateQuantity, removeProductCart }}>
      { children }
    </CartContext.Provider>
  );
}