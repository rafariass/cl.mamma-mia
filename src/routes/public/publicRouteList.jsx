import { lazy } from 'react'
// import { Navigate } from 'react-router-dom'

const Login = lazy(() => import('../../layouts/public/auth/Login'))
const Register = lazy(() => import('../../layouts/public/auth/Register'))

const PUBLIC_ROUTE = [
  // {
  //   id: 'public-route-home',
  //   type: 'PUBLIC',
  //   url: '/',
  //   title: 'Home',
  //   component: () => <Navigate to='/login' />
  // },
  {
    id: 'public-route-login',
    type: 'PUBLIC',
    url: '/login',
    title: 'Login',
    component: (props) => <Login {...props} />
  },
  {
    id: 'public-route-register',
    type: 'PUBLIC',
    url: '/register',
    title: 'Register',
    component: (props) => <Register {...props} />
  }
]

export default PUBLIC_ROUTE
