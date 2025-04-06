import './main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MammaMiaProvider from './contexts/MammaMiaContext'
import { HashRouter } from 'react-router-dom'
import { enableMocking } from './config/environment.js'

const renderApp = () => {
  const root = document.getElementById('root')
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <HashRouter>
        <MammaMiaProvider>
          <App />
        </MammaMiaProvider>
      </HashRouter>
    </React.StrictMode>
  )
}

enableMocking()
  .then(renderApp)
  .catch(console.error)
