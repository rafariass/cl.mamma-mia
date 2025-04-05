import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { MammaMiaContext } from '../contexts/MammaMiaContext'

const PublicRoute = ({ children }) => {
  const { user } = useContext(MammaMiaContext)
  const { pathname } = useLocation()

  return (
    user !== null && (pathname === '/login' || pathname === '/register')
      ? <Navigate to='/products' />
      : children
  )
}

export default PublicRoute
