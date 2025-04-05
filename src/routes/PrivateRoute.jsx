import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { MammaMiaContext } from '../contexts/MammaMiaContext'

const PrivateRoute = ({ children }) => {
  const { user } = useContext(MammaMiaContext)
  const { pathname } = useLocation()

  return (
    user !== null && pathname !== '/' && pathname !== '/login' && pathname !== '/register'
      ? children
      : <Navigate to='/login' />
  )
}

export default PrivateRoute
