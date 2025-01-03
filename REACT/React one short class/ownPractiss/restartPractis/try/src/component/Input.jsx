import { useState } from 'react'
import style from './Input.module.css'
export default function InputComponent({list,setlist}){
  const [task,settask]=useState('');
  const [date,setdate]=useState('');
  const collecttask = (e) =>{
    console.log(e.target.value);
    settask(e.target.value);
  }
  const collectdate = (e) =>{
    console.log(e.target.value);
    setdate(e.target.value);
  }
  function collectall(){
    console.log("try to input");
    const newvaluse = {'task':task , 'date':date}
    setlist([...list,newvaluse]);
  }
  return (
    <>
    <div className={style.inputcontainer}>
      <input type="text" onChange={collecttask}  className={style.inputbox} placeholder="enter Your task"/>
      <input type="date" onChange={collectdate} className={style.inputbox} />
      <button type='submit' onClick={()=>collectall()} className={style.inputbox}>Add</button>
    </div>
    </>
  )
}