import style from './ChatList.module.css'
import Chats from './chats';
function ChatList(){
  return <>
  {/* <div className="gap-2 navbody d-flex flex-column flex-wrap flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "400px" }}> */}
  <div className={`min-vh-100 p-2 ${style.ChatListnav}`}>
    <Chats></Chats>
    <Chats></Chats>
    <Chats></Chats>
    <Chats></Chats>
    <Chats></Chats>
    <Chats></Chats>
    <Chats></Chats>
    <Chats></Chats>
    Chat List...
  </div>
  </>
}

export default ChatList;