//useReducer
export const cartInitialState = []

export const CART_ACTIONS_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_TO_CART: "REMOVE_TO_CART",
  CLEAN_CART: "CLEAN_CART",
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CART_ACTIONS_TYPES.ADD_TO_CART: {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex((item) => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        //no podemos mutar el estado hay que hacer uno nuevo
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ]
    }
    case CART_ACTIONS_TYPES.REMOVE_TO_CART: {
      const { id } = actionPayload
      return state.filter((item) => item.id !== id)
    }
    case CART_ACTIONS_TYPES.CLEAN_CART: {
      return cartInitialState
    }
  }

  return state
}
