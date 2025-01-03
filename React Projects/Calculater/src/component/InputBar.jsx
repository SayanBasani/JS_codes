import { useContext } from "react";
import { TheContext } from "../Storage/CalculaerLogics";

function InputBar(){
  const {Calval} = useContext(TheContext)

  console.log(Calval)
  return <div className="input">
    <input readOnly type="text" value={Calval} className="p-3 w-[300px] h-10 border-2 border-gray-500"/>
  </div>
}
export default InputBar ;