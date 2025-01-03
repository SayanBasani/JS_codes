import style from "./Massages.module.css"
import {TStorage} from "../storages/Storage-Tasks"
import { useContext } from "react"
export default function Massages(){
  const TheContext = useContext(TStorage)
  let fleg = TheContext.allTasks.length;
  
  let r = fleg > 0
  return <div>
    
    <h1 className={`${style.massage_Test}`}>{(r )?  " ":"It is Empty"}</h1>
  </div>
}