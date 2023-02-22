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
  
  return (
    <CartContext.Provider value={{ ...state }}>
      { children }
    </CartContext.Provider>
  );
}