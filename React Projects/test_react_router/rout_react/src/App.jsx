import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/about'
import ContectUs from './components/ContectUs'
import Nav from './components/Nav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const rout = createBrowserRouter(
  [
    {
      path: '/',
      element: <>
        <Nav/>
        <Home />
      </>
    },
    {
      path: '/about',
      element: <>
              <Nav/>
              <About />

      </>
      
    },
    {
      path: '/us',
      element: <>
              <Nav/>

              <ContectUs />
      </>
    },
  ]
)
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <RouterProvider router={rout}/>
      </div>
    </>
  )
}

export default App
