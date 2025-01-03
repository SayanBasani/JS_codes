import { IoMdAddCircleOutline } from "react-icons/io";

function AddTodo({ tasks, setTasks }) {
  // setTasks(...tasks,inputTask)
  let inptxt = ""
  let inpdat = ""
  const inputText = (event) => {
    inptxt = event.target.value.trim()
    console.log(inptxt)
  }
  const inputDate = (event) => {
    inpdat = event.target.value
    console.log(inpdat)
  }
  const inputSubmit = (event) => {
    if (inptxt != "") {
      let list = {
        "task": inptxt,
        "date": inpdat,
      }
      console.log(list);

      setTasks([...tasks, list])
    }
  }

  return <div className="container text-center">
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" placeholder='Enter To Do' onChange={inputText} />
      </div>
      <div className="col-4">
        <input type="date" onChange={inputDate} />
      </div>
      <div className="col-2">
        <button type='button' className='btn btn-success' onClick={inputSubmit}><IoMdAddCircleOutline /></button>
      </div>
    </div>
  </div>
}

export default AddTodo;