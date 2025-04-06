import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Navigation, Loader } from '../components'

import ROUTE_LIST from './routesList'
import PublicRoute from './public/PublicRoute'
import PrivateRoute from './private/PrivateRoute'

const RoutesApp = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          {ROUTE_LIST.map(({ id, type, url, component: Component }) => (
            <Route
              key={id}
              path={url}
              element={
                type === 'PUBLIC'
                  ? <PublicRoute><Component /></PublicRoute>
                  : <PrivateRoute><Component /></PrivateRoute>
              }
            />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default RoutesApp
