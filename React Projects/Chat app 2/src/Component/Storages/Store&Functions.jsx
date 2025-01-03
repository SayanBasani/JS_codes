import { createContext, useState } from "react"


export const TheContext = createContext({});

function HandleContet({ children, value }) {
  const NavOptions = [
    {
      title: "Chat",
      iconBootstrap: "bi-chat-left-text"
    },
    {
      title: "Create Post",
      iconBootstrap: "bi-plus-circle"
    },
    {
      title: "Videos",
      iconBootstrap: "bi-play-btn-fill"
    },
    {
      title: "Reels",
      iconBootstrap: " bi-file-play-fill"
    }
  ]
  const Contact = [
    { img: "bi-person", Friend_Name: "Alice", id: 1 },
    { img: "bi-person", Friend_Name: "Bob", id: 2 },
    { img: "bi-person", Friend_Name: "Charlie", id: 3 },
    { img: "bi-person", Friend_Name: "Diana", id: 4 },
    { img: "bi-person", Friend_Name: "Eve", id: 5 },
    { img: "bi-person", Friend_Name: "Frank", id: 6 },
    { img: "bi-person", Friend_Name: "Grace", id: 7 },
    { img: "bi-person", Friend_Name: "Hank", id: 8 },
    { img: "bi-person", Friend_Name: "Ivy", id: 9 },
    { img: "bi-person", Friend_Name: "Jack", id: 10 },
    { img: "bi-person", Friend_Name: "Karen", id: 11 },
    { img: "bi-person", Friend_Name: "Leo", id: 12 },
    { img: "bi-person", Friend_Name: "Mona", id: 13 },
    { img: "bi-person", Friend_Name: "Nina", id: 14 },
    { img: "bi-person", Friend_Name: "Oscar", id: 15 },
    { img: "bi-person", Friend_Name: "Paul", id: 16 },
    { img: "bi-person", Friend_Name: "Quinn", id: 17 },
    { img: "bi-person", Friend_Name: "Rita", id: 18 },
    { img: "bi-person", Friend_Name: "Sam", id: 19 },
    { img: "bi-person", Friend_Name: "Tina", id: 20 },
  ]
  const chatjson = [
    { "sender": "sa", "massage": "hi","scr_img":"https://picsum.photos/50/50", "sender_img": "bi-person-circle", "date_time": "Time" },
    { "sender": "me", "massage": "ys","scr_img":"https://picsum.photos/50/50", "sender_img": "bi-person-circle", "date_time": "Time" },
    { "sender": "sa", "massage": "lo","scr_img":"", "sender_img": "bi-person-circle", "date_time": "Time" },
    { "sender": "me", "massage": "ok","scr_img":"https://picsum.photos/50/50", "sender_img": "bi-person-circle", "date_time": "Time" },
  ]

  const [Navoption, setNavoption] = useState(NavOptions);
  const [Contacts, setContacts] = useState(Contact);
  const [selectNav, setselectNav] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]); // use to hold uplode post during select files
  const [selectedChat, setselectedChat] = useState('');
  const [chatjsons,setchatjsons] = useState(chatjson);
  // console.log(` it is the Storage.jsx ${selectNav}`);

  return (
    <TheContext.Provider value={{
      ...value, Navoption, setNavoption, Contacts, setContacts
      , selectNav, setselectNav, selectedFiles, setSelectedFiles,
      selectedChat, setselectedChat,chatjsons,setchatjsons,
    }}>
      {children}
    </TheContext.Provider>
  )
}
export default HandleContet;


{
  // to get the data from database must need the img , name , unique id for the specific contect , index(by default) 
}