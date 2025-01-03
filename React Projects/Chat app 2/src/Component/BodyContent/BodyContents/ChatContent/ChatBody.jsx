import { useContext, useState } from "react"
import ChatNav from "./ChatNav/ChatNav"
import { TheContext } from "../../../Storages/Store&Functions"
import FriendsChats from "./FriendsChats/FriendsChats"

export default function ChatBody() {
  const [NavWidth,setNavWidth] = useState('48px')

  const { Contacts } = useContext(TheContext)

  return (
    <>
      <div className={`h-screen`} style={{display: 'grid', gridTemplateColumns: `${NavWidth} 1fr` }}>

        <div className="h-screen overflow-hidden overflow-y-auto side ">
          <ChatNav Contacts={Contacts} setNavWidth = {setNavWidth}></ChatNav>
        </div>
        <FriendsChats></FriendsChats>
      </div>

    </>
  )
}
