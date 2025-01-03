import { useContext } from "react";
import { TheContext } from "../Storage/CalculaerLogics";
function EatchButton({btn}){
  const {Calval,setCalval} = useContext(TheContext)
  return <button onClick={()=>{
    if(btn == "C"){
      setCalval('')
    }else if(btn == "="){
      setCalval(eval(Calval))
    }else{
      setCalval(Calval+btn);
    }
    }} className="border-gray-800 bg-gray-300 w-[50px] h-[50px] rounded-md">{btn}</button>
}
export default EatchButton;