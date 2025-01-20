import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import User_singup from './components/accounts/user_singup.jsx'
import User_login from './components/accounts/user_login.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const rout = createBrowserRouter([
  {
    path : "/account/singup",
    element : <><User_singup/></>
  },
  {
    path : "/account/login",
    element : <><User_login/></>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
