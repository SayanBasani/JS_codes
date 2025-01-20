import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import User_singup from './components/accounts/user_singup.jsx'
import User_login from './components/accounts/user_login.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashbord from './components/pages/Dashbord.jsx'
import Not_Found from './components/Not_Found.jsx'
import HomeNav from './components/pages/HomeNav.jsx'
import ContextProvider from './components/storage'
import Home from './components/pages/Home.jsx'

const rout = createBrowserRouter([
  {
    path: "/",
    element: <>
      <HomeNav />
      <Home />
    </>
  },
  {
    path: "/Dashbord",
    element: <><Dashbord /></>
  },
  {
    path: "/account/singup",
    element: <>
      <HomeNav />
      <User_singup />
    </>
  },
  {
    path: "/account/login",
    element: <>
      <HomeNav />
      <User_login />
    </>
  },
  {
    path: '*',
    element: <>
      <HomeNav />
      <Not_Found />
    </>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      {/* <App rout={rout} /> */}
      <RouterProvider router={rout} />
    </ContextProvider>
  </StrictMode >
)
