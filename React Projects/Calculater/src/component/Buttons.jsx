import { useContext } from "react";
import EatchButton from "./EatchButton";
import { TheContext } from "../Storage/CalculaerLogics";

function Buttons() {
  const { btns } = useContext(TheContext)

return <div className="w-[400px] grid grid-cols-[1fr,1fr,1fr,1fr] justify-items-center gap-5 bg-slate-500 p-5 rounded-[5px]" >
    {btns.map((btn, index) => (
      <EatchButton key={index} btn={btn}></EatchButton>
    ))}

  </div>
}
export default Buttons;
