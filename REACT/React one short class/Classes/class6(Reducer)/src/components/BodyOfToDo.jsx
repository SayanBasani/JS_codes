import style from "./BodyOfToDo.module.css"
import {TStorage} from "../storages/Storage-Tasks"
import { useContext } from "react"
export default function BodyOfToDo() {  
  const FromStorage = useContext(TStorage);
  let setallTasks = FromStorage.setallTasks;
  let allTasks = FromStorage.allTasks;
    const removeTasks = (event , index) =>{
      const remItem = {
        type : "DELETE_ITEM",
        payload : {
          index 
        }
      }
    setallTasks(remItem)
    }
  return <>
     {allTasks.map((item,index) => (<div key={index} className={`${style.Body_Div}`}>
      <p className={`${style.body_tasks}`}>{item.task}</p>
      <p className={`${style.body_Date}`}>{item.date}</p>
      <button className={`${style.Body_button}`} onClick={((event) => removeTasks(event , index))}>Delete</button>
    </div>))}
  </>
}