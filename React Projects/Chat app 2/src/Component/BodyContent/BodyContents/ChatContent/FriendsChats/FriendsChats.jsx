import { useContext } from "react";
import Massages from "./Massages";
import { TheContext } from "../../../../Storages/Store&Functions";
export default function FriendsChats() {
  const {chatjsons,setchatjsons} = useContext(TheContext)
  return (
    <div className="flex flex-col h-screen">
      {/* Chat messages container */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        {/* Chat bubble from person 1 */}
        
        <Massages chatjsons={chatjsons}></Massages>
        
      </div>

      {/* Input field and send button container */}
      <div className="bg-gray-200 p-4 ">
        <div className="flex">
          <input
            type="text"
            className="flex-1 border rounded-full py-2 px-4 mr-2 focus:outline-none"
            placeholder="Type your message..."
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
