import { createContext, useReducer } from 'react'
import { cartReducer, cartInitialState, CART_ACTIONS_TYPES } from '../reducer/cart'

export const CartContext = createContext()


function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  const removeFromCart = (product) => dispatch(
    {
      type: 'REMOVE_TO_CART',
      payload: product
    }
  )
  const cleanCart = () => dispatch({ type: 'CLEAN_CART' })
  return { state, addToCart, removeFromCart, cleanCart }
}





export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, cleanCart } = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        cleanCart
      }}>
      {children}
    </CartContext.Provider>
  )
}