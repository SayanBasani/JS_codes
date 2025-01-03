import style from './InputHader.module.css'
import { TStorage } from '../storages/Storage-Tasks'
import { useRef } from 'react';
import { useContext } from 'react'
export default function InputHader() {
  const FromStorage = useContext(TStorage);
  let InputTask = useRef(null);
  let InputDate = useRef(null);

  const collectData = (a,b) => {
    const taskValue = InputTask.current?.value;
    const dateValue = InputDate.current?.value;
    FromStorage.collectData(taskValue,dateValue)
    InputTask.current.value = ""
    InputDate.current.value = ""
  }

  return <div className={`${style.inputDiv}`}>
    <input type="text" ref={InputTask} className={`${style.inputText}`} />
    <input type="datetime-local" ref={InputDate} className={`${style.inputDateTime}`} />
    <button className={`${style.inputButton}`} onClick={(InputTask,InputDate) => collectData(InputTask,InputDate)}>Add</button>
    {/* <button className={`${style.inputButton}`} onClick={(InputTask,InputDate) => FromStorage.collectData(InputTask,InputDate)}>Add</button> */}
  </div>
}