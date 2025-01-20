import { useContext } from "react"
import { Somecontext } from "../storage";
import Chat_input from "./chat_inputs";
import Person_nav from "./person_nav";
import Manage_recive_send_chats from "./manage_recive_send_chats";
export default function Manage_chat_body() {
  const { View_Mode } = useContext(Somecontext);
  return (
    <>
      <div className={`flex flex-col-reverse h-full overflow-y-auto ${View_Mode === "DARK" ? "bg-slate-800 text-white" : "bg-white text-black"} `}>
        <Person_nav></Person_nav>
        <div className=" flex flex-col-reverse  mt-10 pl-14 pt-16 pb-4  overflow-y-auto">
          <Manage_recive_send_chats></Manage_recive_send_chats>
        </div>
        <Chat_input></Chat_input>
      </div>
    </>
  )
}