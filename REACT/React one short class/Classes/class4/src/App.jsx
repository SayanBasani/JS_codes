import './App.css'
import Ap from './container/App1'
function App() {
  function Cal(name){
    console.log(`it is Cal ${name}`)
  }
  return <div key='div'>
    sayanb
    <Ap Call = {Cal()}/>
    {/* <Ap Cal = {Cal()}/> */}
  </div>
}

export default App
