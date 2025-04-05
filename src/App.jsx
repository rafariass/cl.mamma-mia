import { lazy, Suspense, useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MammaMiaContext } from './contexts/MammaMiaContext'
import { PublicRoute, PrivateRoute } from './routes'
import { Navigation, Footer } from './components'

// ! Option 1
// import { Cart, Login, NotFound, Product, Products, Profile, Register } from './layouts'

// ! Option 2
// import Login from './layouts/public/auth/Login'
// import Register from './layouts/public/auth/Register'
// import Products from './layouts/private/Products'
// import Product from './layouts/private/Product'
// import Profile from './layouts/private/Profile'
// import Cart from './layouts/private/Cart'
// import NotFound from './layouts/private/NotFound'

// ! Option 3
const Login = lazy(() => import('./layouts/public/auth/Login'))
const Register = lazy(() => import('./layouts/public/auth/Register'))
const Products = lazy(() => import('./layouts/private/Products'))
const Product = lazy(() => import('./layouts/private/Product'))
const Profile = lazy(() => import('./layouts/private/Profile'))
const Cart = lazy(() => import('./layouts/private/Cart'))
const NotFound = lazy(() => import('./layouts/private/NotFound'))

const App = () => {
  const { verifyState } = useContext(MammaMiaContext)

  useEffect(() => {
    verifyState()
  }, [])

  return (
    <>
      <Navigation />
      <Suspense fallback={null}>
        <Routes>
          <Route
            path='/'
            element={
              <PublicRoute>
                <Navigate to='/login' />
              </PublicRoute>
            }
          />
          <Route
            path='/login'
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path='/Register'
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path='/products'
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          />
          <Route
            path='/products/:id'
            element={
              <PrivateRoute>
                <Product />
              </PrivateRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path='/cart'
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path='*'
            element={
              <PrivateRoute>
                <NotFound />
              </PrivateRoute>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
