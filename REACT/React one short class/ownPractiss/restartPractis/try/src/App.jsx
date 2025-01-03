import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import InputComponent from './component/Input'
import AddedThings from './component/AddedThings'

function App() {
  const newlist = [
    {'task':"task a",'time':'00'},
    {'task':"task b",'time':'01'},
    {'task':"task c",'time':'02'},
    {'task':"task d",'time':'03'},
    {'task':"task e",'time':'04'},
  ];
  const [list , setlist] = useState(newlist);
  const deletetask = (i)=>{
    console.log(i);
    const newlist =[...list];
    newlist.splice(i,1);
    setlist(newlist);
    console.log(list);
  }
  
  return (
    <>
      <div className='maincontainer'>
        <InputComponent list={list} setlist = {setlist}></InputComponent>
        <AddedThings list = {list} deletetask={deletetask}></AddedThings>
      </div>
    </>
  )
}

export default App;
