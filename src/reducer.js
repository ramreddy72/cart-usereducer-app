import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'
const reducer = (state, action) => {
  switch (action.type) {
    case LOADING: {
      return { ...state, isLoading: true }
    }
    case DISPLAY_ITEMS: {
      const newCart = new Map(
        action.payload.cartItems.map((item) => [item.id, item])
      )
      return { ...state, isLoading: false, cart: newCart }
    }
    case REMOVE:
      state.cart.delete(action.payload.id)
      return { ...state }
    case CLEAR_CART:
      return { ...state, cart: new Map([]) }
    case INCREASE: {
      const newCart = new Map(state.cart)
      const cartId = action.payload.id
      const cartItem = newCart.get(cartId)
      const newCartItem = { ...cartItem, amount: cartItem.amount + 1 }
      newCart.set(cartId, newCartItem)
      return { ...state, cart: newCart }
    }
    case DECREASE: {
      const newCart = new Map(state.cart)
      const cartId = action.payload.id
      const cartItem = newCart.get(cartId)
      if (cartItem.amount < 2) {
        newCart.delete(cartId)
        return { ...state, cart: newCart }
      }
      const newCartItem = { ...cartItem, amount: cartItem.amount - 1 }
      newCart.set(cartId, newCartItem)
      return { ...state, cart: newCart }
    }
    default:
      new Error(`No matching action selected : ${action.type}`)
  }
}

export default reducer
