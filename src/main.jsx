import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId='741919884061-6o1prr1bo6qfr7hlnse6dgo1k8fmuis7.apps.googleusercontent.com' >
    <App />
  </GoogleOAuthProvider>
  </React.StrictMode>,
)
