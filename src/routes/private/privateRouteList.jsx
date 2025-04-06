import { lazy } from 'react'

const Products = lazy(() => import('../../layouts/private/Products'))
const Product = lazy(() => import('../../layouts/private/Product'))
const Profile = lazy(() => import('../../layouts/private/Profile'))
const Cart = lazy(() => import('../../layouts/private/Cart'))
const NotFound = lazy(() => import('../../layouts/private/NotFound'))

const PRIVATE_ROUTE = [
  {
    id: 'public-route-products',
    type: 'PRIVATE',
    url: '/products',
    title: 'Products',
    component: (props) => <Products {...props} />
  },
  {
    id: 'public-route-product',
    type: 'PRIVATE',
    url: '/products/:id',
    title: 'Product',
    component: (props) => <Product {...props} />
  },
  {
    id: 'public-route-profile',
    type: 'PRIVATE',
    url: '/profile',
    title: 'Profile',
    component: (props) => <Profile {...props} />
  },
  {
    id: 'public-route-',
    type: 'PRIVATE',
    url: '/cart',
    title: 'Cart',
    component: (props) => <Cart {...props} />
  },
  {
    id: 'public-route-not-found',
    type: 'PRIVATE',
    url: '*',
    title: 'Not Found',
    component: (props) => <NotFound {...props} />
  }
]

export default PRIVATE_ROUTE
