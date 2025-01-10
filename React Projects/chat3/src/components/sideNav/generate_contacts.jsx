import { useContext } from "react"
import { Somecontext } from "../storage"

export default function Generate_contacts() {
  const { sidenav_status,user_contacts, set_body_content_have_to_display,set_sidenav_status } = useContext(Somecontext);


  return (
    <>{
      user_contacts.map((item, index) => {
        
        return (
          <div key={index} onClick={
            ()=>{
              console.log("in the generate content");
              console.log(item['person_uid']);
              set_body_content_have_to_display( //this use to set whicha content have to display in the main screen 
                {
                  "from_the_option":"contects",
                  "details":{
                    "conversation_with":{
                      "person_id":`${item['person_uid']}`,
                      "type":"CHAT",
                    }
                  }
                }
              );
              set_sidenav_status(!sidenav_status);
              // set_sidenav_status(false);
            }
          } className="cursor-pointer  hover:bg-slate-300 bg-white rounded-lg shadow-lg flex gap-4 items-center font-serif px-4 py-1 my-5">
            
            {/* <img src="" className="rounded-3xl w-8 h-8 bg-black" alt="" /> */}
            <i className="bi bi-person-circle text-2xl"></i>
            <h4 className="font-sans">{item['person_name']}</h4>
            <div className="absolute right-4 bg-green-600 w-2 h-2 rounded-lg"></div>
          </div>
        )
      })
    }
    </>
  )
}