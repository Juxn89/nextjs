import { createContext } from 'react'
import { ICartProduct } from '@interfaces/index';

interface ContextProps {
  cart: ICartProduct[],
  addProductToCart: (product: ICartProduct) => void,
  loadProductCart: () => ICartProduct[],
  updateQuantity: (product: ICartProduct) => void,
  removeProductCart : (product: ICartProduct) => void
}

export const CartContext = createContext({} as ContextProps)