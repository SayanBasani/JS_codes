import './App.css'
import ContextProvider from './components/storage'
import Dashbord from './components/pages/Dashbord'



function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <ContextProvider>
        <Dashbord/>
      </ContextProvider>
    </>
  )
}

export default App
