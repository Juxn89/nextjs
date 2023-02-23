import { createContext } from 'react'
import { ICartProduct } from '@interfaces/index';

interface ContextProps {
  cart: ICartProduct[],
  addProductToCard: (product: ICartProduct) => void
}

export const CartContext = createContext({} as ContextProps)