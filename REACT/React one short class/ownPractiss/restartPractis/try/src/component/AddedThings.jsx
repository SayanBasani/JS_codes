import style from './AddedThings.module.css'
export default function AddedThings({list,deletetask}){
  // console.log(list);
  return (
    <>
    <div>
      {list.map((element,index) => (
      <div key={index} className={style.listbody}>
        <p className={style.listbox}>{element.task}</p>
        <p className={style.listbox}>{element.time}</p>
        <button onClick={() => deletetask(index)} className={`${style.listbox} ${style.removebox}`}>remove</button>
      </div>
      ))}
    </div>
    </>
  )
}