import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {AppName} from './contener/AppComponents'
import { AppDescription } from './contener/AppComponents'
import { AppVariable } from './contener/AppComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AppName/>
      <AppDescription/>
      <AppVariable/>
    </div>
  )
}

export default App
