import style from "./BodyOfToDo.module.css"
import {TStorage} from "../storages/Storage-Tasks"
import { useContext } from "react"
export default function BodyOfToDo() {  
  const FromStorage = useContext(TStorage);
  let setallTasks = FromStorage.setallTasks;
  let allTasks = FromStorage.allTasks;
    const removeTasks = (event , index) =>{
      // console.log(index);
      // console.log(allTasks[index])
      let nowTasks = allTasks.filter((_,itemIndex) => itemIndex != index );
    setallTasks([...nowTasks])
    }
  return <>
     {allTasks.map((item,index) => (<div key={index} className={`${style.Body_Div}`}>
      <p className={`${style.body_tasks}`}>{item.task}</p>
      <p className={`${style.body_Date}`}>{item.date}</p>
      <button className={`${style.Body_button}`} onClick={((event) => removeTasks(event , index))}>Delete</button>
    </div>))}
  </>
}