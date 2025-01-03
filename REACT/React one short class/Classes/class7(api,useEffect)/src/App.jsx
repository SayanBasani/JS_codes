import { useContext, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatPost from './components/CreatPost'
import PostList from './components/PostList'
import FunctionProvider from './store/Social-storage'
function App() {
  let [selectedTab, setSelectedTab] = useState("Home");
  return (
    <FunctionProvider>
      <div className='main-container'>
        <SideBar setSelectedTab={setSelectedTab} selectedTab={selectedTab}></SideBar>
        <div className="content">
          <Header></Header>

          {selectedTab === "Home" ? <PostList></PostList> : <CreatPost></CreatPost>}
          <Footer></Footer>
        </div>
      </div>
    </FunctionProvider>
  )
}

export default App
