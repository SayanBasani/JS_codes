import { IoMdAddCircleOutline } from "react-icons/io";
import { useRef } from "react";
import { useContext } from "react";
import { TaskContext } from "../storage/Storage-tasks";

function AddTodo() {

  const TaskFromContext = useContext(TaskContext);
  const inpTask = useRef("")
  const inpDate = useRef("")

  const inputSubmit = (event) => {
    let inptxt = inpTask.current.value.trim()
    if (inptxt.length > 0) {
      let inpdat = inpDate.current.value
      inpTask.current.value = ""
      inpDate.current.value = ""
      // setTasks([...tasks,{task:inptxt,date:inpdat}])
      TaskFromContext.setTasks((listss) => 
        [...listss, { task: inptxt, date: inpdat }

        ])
    }
  }

  return <div className="container text-center row kg-row">
    <div className="col-6">
      <input type="text" ref={inpTask} placeholder='Enter To Do' />
    </div>
    <div className="col-4">
      <input type="date" ref={inpDate} />
    </div>
    <div className="col-2">
      <button type='button' className='btn btn-success' onClick={inputSubmit}><IoMdAddCircleOutline /></button>
    </div>
  </div>
}

export default AddTodo;