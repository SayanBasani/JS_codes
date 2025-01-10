import { useContext } from "react"
import { Somecontext } from "./storage"
import Manage_chat_body from "./chat_box_components/manage_chat_body";
export default function Body_contents() {
  const { View_Mode,body_content_have_to_display } = useContext(Somecontext);
  console.log("the details ave to display :- ",body_content_have_to_display);
  
  return (
    <>
      <div className={`flex flex-col-reverse h-full overflow-y-auto ${View_Mode === "DARK" ? "bg-slate-800 text-white" : "bg-white text-black"} `}>

        <Manage_chat_body></Manage_chat_body>

      </div>
    </>
  )
}