import style from './InputHader.module.css'
import {TStorage} from '../storages/Storage-Tasks'
import { useRef } from 'react';
import { useContext } from 'react'
export default function InputHader(){
  const FromStorage = useContext(TStorage);
  let InputTask = useRef(null);
  let InputDate = useRef(null);
  const collectData = () =>{
    const taskValue = InputTask.current?.value;
    const dateValue = InputDate.current?.value;
    let collectedData = {
      "task" : taskValue,
      "date": dateValue,
    }
    InputTask.current.value = ""
    InputDate.current.value = ""
    if (taskValue && dateValue) {
      // console.log('Task:', taskValue);
      // console.log('Date:', dateValue);
      // console.log(collectedData);
      
      FromStorage.setallTasks([...FromStorage.allTasks , {"task" : taskValue,"date": dateValue,}])
      // console.log("now after update the tasks ");
      
      // console.log(collectedData);
      // console.log("now the main storage is ");
      // console.log(FromStorage.allTasks);
      
      
    } else {
      console.log('Please enter both task and date');
    }

  }
  let setallTasks = FromStorage.setallTasks;
  return <div className={`${style.inputDiv}`}>
    <input type="text" ref={InputTask} className={`${style.inputText}`} />
    <input type="datetime-local" ref={InputDate} className={`${style.inputDateTime}`} />
    <button className={`${style.inputButton}`} onClick={collectData}>Add</button>
  </div>
}