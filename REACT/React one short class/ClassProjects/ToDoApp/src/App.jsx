import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import "./App.css";
function App() {
  let [tasks,setTasks] = useState([]);
  console.log(tasks);
  const  DeletTask= (i) =>{
    console.log(i)
    console.log(tasks[i])
    // let newtasks = tasks.splice(i,0);
    const newtasks = tasks.filter((_, taskIndex) => taskIndex !== i);
    console.log(newtasks);
    
    setTasks(newtasks)
  }


  return <center className='Todo-center'>
    <AppName />
    <AddTodo setTasks = {setTasks} tasks={tasks} />
    <div className="items-center">
      <TodoItem list = {tasks}  DeletTask ={DeletTask}/>
    </div>
    </center>
    
  
}

export default App
