import { useContext, useEffect } from "react";
import { TodoContext } from "./TodoStorage";
export default function TodoInp() {
  const { TodoStore, setTodoStore } = useContext(TodoContext)
  let TheTask = "";
  useEffect(()=>{
    console.log("the changed task :- " +TheTask);
    
  },[TheTask])
  return (
    <>
      <div className="flex justify-center gap-2 h-10">
        <input type="text" value={TheTask}/>
        <input type="datetime-local" name="" id="" />
        <button className="font-bold bg-green-500 px-3 rounded-[15px]">ADD</button>
      </div>
    </>
  );
}