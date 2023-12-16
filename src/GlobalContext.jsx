import { createContext, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
import './util'
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions'
import { getDetailsCost } from './util'

const url = 'https://www.course-api.com/react-useReducer-cart-project'

const AppContext = createContext()

const initialState = {
  isLoading: false,
  cart: new Map(),
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { totalAmount, totalCost } = getDetailsCost({ ...state })

  const fetchCartItems = async () => {
    dispatch({ type: LOADING })
    const response = await fetch(url)
    const cartItems = await response.json()
    dispatch({ type: DISPLAY_ITEMS, payload: { cartItems } })
  }
  useEffect(() => {
    fetchCartItems()
  }, [])

  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: { id } })
  }

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const increaseItem = (id) => {
    dispatch({ type: INCREASE, payload: { id } })
  }

  const decreaseItem = (id) => {
    dispatch({ type: DECREASE, payload: { id } })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        removeItem,
        clearCart,
        increaseItem,
        decreaseItem,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
