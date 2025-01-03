import { useState } from 'react'
import './App.css'
import InputBar from './component/InputBar'
import Buttons from './component/Buttons'
import ContextProvider from './Storage/CalculaerLogics'

function App() {
  const [btns,setbtns] = useState([1,2,3,'+',4,5,6,'-',7,8,9,'*','C',0,'/','='])

  return (
    <ContextProvider  value={{btns}}>
      <div className='border-gray-300 rounded-md border-2 p-4 gap-5 grid justify-center'>
        <InputBar></InputBar>
        <Buttons></Buttons>
      </div>
    </ContextProvider>
  )
}

export default App
