import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoTasks from './components/TodoTasks'
function App() {
  let [allTasks, setallTasks] = useState([])
  function getInfoFromInput(teskText,TaskDate){
    console.log(`${teskText}  ${TaskDate}`)
    let taskArr = {task: teskText,time: TaskDate,}
    setallTasks([...allTasks,taskArr])
    console.log(allTasks)
  }
  return (
    <div className='mainDiv'>
      <TodoInput getInfoFromInput = {getInfoFromInput}/>
      <div>
        <TodoTasks allTasks={allTasks}/>
      </div>
    </div>
  )
}

export default App
