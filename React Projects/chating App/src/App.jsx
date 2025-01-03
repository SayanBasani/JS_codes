import { useState } from 'react'
import './App.css'
import AppHeader from './components/Header'
import AppNav from './components/Nav'
import HandleContet from './storage/Function_Storages'
import Chat from './components/Chat'
import ChatList from './components/ChatList'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <HandleContet>
      <div className='AppBody'>
        <AppNav></AppNav>
        <div className='w-100 MainBody'>
          <AppHeader></AppHeader>
          <div className='w-100 chat'>
          <ChatList></ChatList>
          <Chat></Chat>
          </div>
        </div>
      </div>
    </HandleContet>
  )
}

export default App;
