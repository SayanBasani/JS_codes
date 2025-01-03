import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import { TaskContext } from './storage/Storage-tasks'
import "./App.css";
function App() {
  let [tasks, setTasks] = useState([]); //{ task: "inptxt", date: "inpdat" }
  const DeletTask = (i) => {
    const newtasks = tasks.filter((_, taskIndex) => taskIndex !== i);
    setTasks(newtasks)
  }
  return <center className='Todo-center'>
    <TaskContext.Provider
      value={{
        tasks: tasks,
        setTasks: setTasks,
        DeletTask: DeletTask,
      }}>
      <AppName />
      <AddTodo />
      <div className="items-center">
        <TodoItem />
      </div>
    </TaskContext.Provider>
  </center>
}

export default App
