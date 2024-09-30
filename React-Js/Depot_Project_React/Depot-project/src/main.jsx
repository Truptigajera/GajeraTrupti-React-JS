import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import './App.css'
import Store from './Redux/Store.jsx'
import { NextUIProvider } from '@nextui-org/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <NextUIProvider>

      <App />

      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
)
