import { CartState } from '@context/cart/index'
import { ICartProduct } from '@interfaces/index'

type CartActionType = 
  | { type: '[CART] - LoadCart from cookies | storage', payload: ICartProduct[] }
  | { type: '[CART] - Add Product', payload: ICartProduct }

export const CartReducer = (state: CartState, action: CartActionType) => {
  switch (action.type) {
    case '[CART] - LoadCart from cookies | storage':
      return { ...state }
    case '[CART] - Add Product':
      return { ...state }
    default:
      return { ...state }  
  }
}