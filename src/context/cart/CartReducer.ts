import { CartState } from '@context/cart/index'
import { ICartProduct } from '@interfaces/index'

type CartActionType = 
  | { type: '[CART] - LoadCart from cookies | storage', payload: ICartProduct[] }
  | { type: '[CART] - Update products in cart', payload: ICartProduct[] }
  | { type: '[CART] - Change product quantity in cart', payload: ICartProduct }

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
    case '[CART] - Change product quantity in cart':
      return {
        ...state,
        cart: state.cart.map(p => { 
          if(p._id === action.payload._id && p.size === action.payload.size) return p;

          return action.payload;
        })
      }
    default:
      return { ...state }  
  }
}