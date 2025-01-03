import style from "./TodoTasks.module.css"
function TodoTasks({ allTasks }) {
  console.log("this log into todotasks.jsx")
  console.log(allTasks)
  console.log("start print array")
  allTasks.map((item)=>{console.log(item.task)})
  console.log("end print array")

  return <>
    {allTasks.map((item,index) => (
      <div key={index} className={`${style.TaskDiv}`}>
        <p className={`${style.TaskText}`}>{item.task}</p>
        <p className={`${style.TaskText}`}>{item.time}</p>
        <button>Delete</button>
      </div>))}
  </>
}

export default TodoTasks;