import { FC, useReducer } from 'react';
import { ICartProduct } from '@interfaces/index'
import { CartContext, CartReducer } from 'context/cart/index'

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

  const addProductToCard = (product: ICartProduct) => {
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
  
  return (
    <CartContext.Provider value={{ ...state, addProductToCard }}>
      { children }
    </CartContext.Provider>
  );
}