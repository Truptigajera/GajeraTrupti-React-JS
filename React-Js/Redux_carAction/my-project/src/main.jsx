import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Store from './reduxcore/Store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
)