import 'bootstrap-icons/font/bootstrap-icons.css';
import { useContext, useState } from 'react';
import { TheContext } from '../../../../Storages/Store&Functions';


export default function ChatNav({ Contacts, setNavWidth }) {
  const { selectedChat, setselectedChat } = useContext(TheContext)
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);

    if (isExpanded == true) {
      setNavWidth("48px")
    } else {
      setNavWidth("192px")
    }
  };
  const HandleSelectChat = (ChatId) => {
    console.log(ChatId);
    setselectedChat(ChatId)
  }

  return (
    <>
      <div className="w-fit">
        {/* Sidebar */}
        <div className={`bg-gray-800 text-white h-[100%] transition-all duration-300 ease-in-out ${isExpanded ? 'w-48' : 'w-12'}`}>
          <div className="p-3 flex sticky top-0 bg-gray-800">
            <button onClick={toggleSidebar} className='sticky top-[1px]'>
              <i className="bi bi-person-lines-fill"></i>
            </button>
          </div>
          {/* Menu Items */}
          <ul className="mt-2 space-y-4 text-center flex flex-col pl-3 justify-center">
            {Contacts.map((items, index) => (
              <li key={index} className={`pl-2 ${selectedChat == items.id ? 'bg-blue-500' : ''} flex flex-row gap-3 cursor-pointer`}
                onClick={() => HandleSelectChat(items.id)}
              >
                <i className={`bi ${items.img}`}></i>
                {isExpanded && <span className="text-xs font- flex items-center">{items.Friend_Name}</span>}
              </li>
            ))}

          </ul>
        </div>


      </div>
    </>
  )
}