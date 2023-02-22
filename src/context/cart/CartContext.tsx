import { createContext } from 'react'

interface ContextProps {
  cart: any
}

export const CartContext = createContext({} as ContextProps)