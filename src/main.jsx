import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId='134299630482-voi8b49uph4bc70opp00idgug3m6piok.apps.googleusercontent.com' >
    <App />
  </GoogleOAuthProvider>
  </React.StrictMode>,
)
