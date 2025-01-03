import { MdOutlineDeleteForever } from "react-icons/md"
import { useContext } from "react";
import { TaskContext } from "../storage/Storage-tasks";

function TodoItem() {
  const TaskFromContext = useContext(TaskContext);

  return <>
    {TaskFromContext.tasks.map((item, index) => (<div key={index} className="container">
      <div key={index} className="row kg-row">
        <div className="col-6">
          {item.task}
        </div>
        <div className="col-4">
          {item.date}
        </div>
        <div className="col-2">
          <button key={index} className='btn btn-danger' onClick={() => TaskFromContext.DeletTask(index)}><MdOutlineDeleteForever /></button>
        </div>
      </div>
    </div>))}
  </>
}

export default TodoItem;