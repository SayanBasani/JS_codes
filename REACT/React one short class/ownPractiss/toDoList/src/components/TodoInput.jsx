import style from "./TodoInput.module.css"
function TodoInput({getInfoFromInput}){
  let TaskText = ""
  let TaskDate = ""
  const extreceTaskText=(event)=>{
    TaskText = `${event.target.value}${event.key}`
    console.log(TaskText)
  }
  const extreceData=(event)=>{
    TaskDate = event.target.value
    console.log(TaskDate)
  }
  function handleClick() {
    getInfoFromInput(TaskText,TaskDate);

  }
  return <div className={`${style.inputDiv}`}>
      <input type="text" name="" id="inputText" className={`${style.inputText}`} onKeyDown={extreceTaskText} />
      <input type="date" name="" id="inputDate" className={`${style.inputDate}`} onChange={extreceData}/>
      <input type="submit" value="Add" className={`${style.inputSubmit}`} onClick={handleClick}/>
    </div>
}
export default TodoInput