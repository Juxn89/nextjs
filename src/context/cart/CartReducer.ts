import { CartState } from '@context/cart/index'
import { ICartProduct } from '@interfaces/index'

type CartActionType = 
  | { type: '[CART] - LoadCart from cookies | storage', payload: ICartProduct[] }
  | { type: '[CART] - Update products in cart', payload: ICartProduct[] }

export const CartReducer = (state: CartState, action: CartActionType) => {
  switch (action.type) {
    case '[CART] - LoadCart from cookies | storage':
      return { 
        ...state,
        cart: [...action.payload]
      }
    case '[CART] - Update products in cart':
      return { 
        ...state,
        cart: [...action.payload]
      }
    default:
      return { ...state }  
  }
}