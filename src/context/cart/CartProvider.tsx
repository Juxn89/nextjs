import { FC, useEffect, useReducer } from 'react';
import { ICartProduct } from '@interfaces/index'
import { CartContext, CartReducer } from 'context/cart/index'
import CookieJS from 'js-cookie';

type CartProviderProps = {
  children: React.ReactNode
}

export interface CartState {
  cart: ICartProduct[]
}

const INITIAL_STATE: CartState = {
  cart: []
}

export const CartProvider: FC<CartProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

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
  
  return (
    <CartContext.Provider value={{ ...state, addProductToCart, loadProductCart, updateQuantity }}>
      { children }
    </CartContext.Provider>
  );
}