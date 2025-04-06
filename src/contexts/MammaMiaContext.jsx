import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { formatMoney, sweetAlert2 } from '../utils'
import { ENDPOINTS } from '../config/constants'

export const MammaMiaContext = createContext()

export const MammaMiaProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])
  const [pizzas, setPizzas] = useState(null)
  const navigate = useNavigate()

  const addProductCart = (product) => {
    let newCart = []

    if (cart.findIndex((item) => item.id === product.id) === -1) {
      newCart = [...cart, { ...product, cant: 1 }]
      setCart(newCart)
    } else {
      newCart = cart.map((item) => {
        if (item.id === product.id) {
          item.cant += 1
        }
        return item
      })
      setCart(newCart)
    }

    window.sessionStorage.setItem('MammaMiaPizzeria', JSON.stringify({ user, products: pizzas, cart: newCart }))
    sweetAlert2({ text: 'Your products have been successfully added to the shopping cart', icon: 'success', confirmButton: 'btn btn-success px-5' })
  }

  const removeProductCart = (product) => {
    const newCart = []
    cart.forEach((item) => {
      if (item.id === product.id) item.cant -= 1
      item.cant >= 1 && newCart.push(item)
    })
    setCart(newCart)

    window.sessionStorage.setItem('MammaMiaPizzeria', JSON.stringify({ user, products: pizzas, cart: newCart }))
    sweetAlert2({ text: 'Your products have been successfully removed from the shopping cart', icon: 'success', confirmButton: 'btn btn-success px-5' })
  }

  const totalPizzaCart = () => {
    if (cart?.length === 0) return 0
    const total = cart.reduce((ac, cv) => ac + cv.cant * cv.price, 0)
    return formatMoney(total)
  }

  const clearCart = () => {
    window.sessionStorage.setItem('MammaMiaPizzeria', JSON.stringify({ user, products: pizzas, cart: [] }))
    setCart([])

    sweetAlert2({ text: 'Cart has been cleared', icon: 'success', confirmButton: 'btn btn-success px-5' })
  }

  const checkouts = async () => {
    if (cart.length <= 0) {
      sweetAlert2({ text: 'You must add products to your cart first', icon: 'error', confirmButton: 'btn btn-success px-5' })
      return
    }

    try {
      const { data: response } = await axios.post(ENDPOINTS.CHECKOUTS, cart, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        }
      })
      window.sessionStorage.setItem('MammaMiaPizzeria', JSON.stringify({ user, products: pizzas, cart: [] }))
      setCart([])

      sweetAlert2({ text: response.message, icon: 'success', confirmButton: 'btn btn-success px-5' })
    } catch (error) {
      sweetAlert2({
        text: error?.response?.data?.error || 'Request sent, but no response received from the server.',
        icon: 'error',
        confirmButton: 'btn btn-danger px-5'
      })
      logOut()
    }
  }

  const verifyState = () => {
    const stateSession = JSON.parse(window.sessionStorage.getItem('MammaMiaPizzeria'))
    if (stateSession === null) {
      logOut()
      navigate('/login')
      return
    }

    setUser(stateSession.user)
    setPizzas(stateSession.products)
    setCart(stateSession.cart)
    navigate('/products')
  }

  const getAuth = async (url, payload) => {
    try {
      const { data: user } = await axios.post(url, payload)
      const pizzasProduct = await getProducts(user)
      setUser(user)
      setPizzas(pizzasProduct)
      setCart([])
      window.sessionStorage.setItem('MammaMiaPizzeria', JSON.stringify({ user, products: pizzasProduct, cart: [] }))
    } catch (error) {
      sweetAlert2({
        text: error?.response?.data?.error || 'Request sent, but no response received from the server.',
        icon: 'error',
        confirmButton: 'btn btn-danger px-5'
      })
    }
  }

  const getProfile = async () => {
    try {
      const { data: profile } = await axios.get(ENDPOINTS.ME, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        }
      })
      return profile
    } catch (error) {
      sweetAlert2({
        text: error?.response?.data?.error || 'Request sent, but no response received from the server.',
        icon: 'error',
        confirmButton: 'btn btn-danger px-5'
      })
      logOut()
    }
  }

  const getProducts = async (user) => {
    try {
      const { data: products } = await axios.get(ENDPOINTS.PRODUCTS, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        }
      })
      return products
    } catch (error) {
      sweetAlert2({
        text: error?.response?.data?.error || 'Request sent, but no response received from the server.',
        icon: 'error',
        confirmButton: 'btn btn-danger px-5'
      })
      logOut()
    }
  }

  const getProduct = async (id) => {
    try {
      const { data: product } = await axios.get(`${ENDPOINTS.PRODUCTS}/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        }
      })
      return product
    } catch (error) {
      sweetAlert2({
        text: error?.response?.data?.error || 'Request sent, but no response received from the server.',
        icon: 'error',
        confirmButton: 'btn btn-danger px-5'
      })
      logOut()
    }
  }

  const registerUser = (user) => getAuth(ENDPOINTS.REGISTER, user)

  const logIn = (user) => getAuth(ENDPOINTS.LOGIN, user)

  const logOut = () => {
    window.sessionStorage.removeItem('MammaMiaPizzeria')
    setUser(null)
    setCart([])
    setPizzas(null)
  }

  const globalState = {
    user,
    cart,
    pizzas,
    addProductCart,
    removeProductCart,
    totalPizzaCart,
    clearCart,
    checkouts,
    verifyState,
    getProfile,
    getProduct,
    registerUser,
    logIn,
    logOut
  }

  return (
    <MammaMiaContext.Provider value={globalState}>
      {children}
    </MammaMiaContext.Provider>
  )
}

export default MammaMiaProvider
