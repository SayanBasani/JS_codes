import { useState } from 'react'
import './App.css'
import Headers from './components/Headers'
import Massages from './components/Massages'
import BodyOfToDo from './components/BodyOfToDo'
import InputHader from './components/InputHader'
import TStorage from './storages/Storage-Tasks'
function App() {
  let sampleTask = [{"task": "task 1","date": "time 1",},{  "task": "task 2",  "date": "time 2",}];
  let [allTasks, setallTasks] = useState([]);
  // let tasks = [{"task" : "task 1",  "date": "time 1",},{  "task" : "task 2",  "date": "time 2",}]
  return (
    <div className='Contets_Div'>
      <TStorage.Provider value={
        {
          setallTasks: setallTasks,
          allTasks: allTasks,
        }}>
        <InputHader></InputHader>
        <Massages></Massages>
        <Headers></Headers>
        <BodyOfToDo></BodyOfToDo>
      </TStorage.Provider>
    </div>
  )
}

export default App
