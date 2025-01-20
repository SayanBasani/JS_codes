import { useContext } from "react"
import { Somecontext } from "../storage"
export default function Person_nav() {
  const {View_Mode} = useContext(Somecontext);
  // console.log(View_Mode);
  
  return (
    <>
      <div className="absolute top-10 bg-slate-500 w-full h-10 grid grid-cols-2 items-center px-10">
        <div className="flex items-center gap-3 font-medium px-3">
          <i className="bi bi-person-circle text-2xl "></i>
          <h4>Sayan Basani</h4>
        </div>
        <i className=" bi bi-three-dots-vertical flex  justify-end"></i>
      </div>
    </>
  )
}