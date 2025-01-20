import Chat_recive from "./chat_recive";
import Chat_send from "./chat_send";
import { Somecontext } from "../storage";
import { useContext } from "react";
export default function Manage_recive_send_chats() {
  const { chat_have_to_display, set_chat_have_to_display, user_chat, user_details } = useContext(Somecontext);
  // console.log(user_chat['messages'][0]);

  const userId = user_details['userId'];
  const allMassages = user_chat['messages']
  const sender_name = user_chat['sender_details']['sender_name']
  // console.log(sender_name);


  return (
    <>
      <div className="">
        {
          allMassages.map((items, index) => {
            // console.log(items);
            let sender_id = items['sender_id'];
            if (userId === sender_id) {

              return (
                <div key={index}>
                  <Chat_send items={items}></Chat_send>
                </div>
              )
            } else {
              return (
                <div key={index}>
                  <Chat_recive items={items} sender_name={sender_name}></Chat_recive>
                </div>
              )
            }

          })
        }

      </div>
    </>
  )
}