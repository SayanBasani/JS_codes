import './App.css'
import TopNav from './components/nav'
import SideNav from './components/sideNav/sideNav'
import ContextProvider from './components/storage'
import Body_contents from './components/bodyContents'



function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <ContextProvider>
        <div className=''>
          <div className='z-10 bg-[rgb(33_33_33)] text-white fixed w-full h-11 top-0 grid items-center'>
            <TopNav></TopNav>
          </div>
          <div className='z-10 top-11 fixed h-screen'>
            <SideNav></SideNav>
          </div>
          <div className='z-0 bg-slate-600 overflow-y-auto h-screen'>
            <Body_contents></Body_contents>
          </div>
        </div>
      </ContextProvider>
    </>
  )
}

export default App
