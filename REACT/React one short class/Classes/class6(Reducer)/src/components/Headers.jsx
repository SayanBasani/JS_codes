import style from './Headers.module.css'
import {TStorage} from '../storages/Storage-Tasks';
import { useContext } from 'react';
function Headers(){
  let TheContext = useContext(TStorage);
  let allTasks = TheContext.allTasks;
  if (allTasks.length == 0 ){
    return ""
  }
  return <div className={`${style.heading_Div}`}>
    <h2 className={`${style.heading_Tasks}`}>Tasks</h2>
    <h2 className={`${style.heading_Dates}`}>Dates</h2>
    <div></div>
  </div>

}
export default Headers ; 