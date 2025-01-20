import { useContext, useState } from "react"
import { Somecontext } from "../storage"
import Generate_contacts from "./generate_contacts";
import DarkMode from "../darkMode";
import Side_Bar_search from "./sideNav_search/side_bar_Search";


export default function SideNav() {
  const { View_Mode, sidenav_status, set_sidenav_status, sidenav_options_icons, sidenav_selected_opt, set_sidenav_selected_opt } = useContext(Somecontext);
  // const [togal_btn, set_togal_btn] = useState({ previeus_sidebar_opt: "", click_count: 0 });
  // console.log("te state is :-", sidenav_options_icons);

  return (
    <>
      <div className="flex h-full">

        {/* <div className={`text-white sticky z-40 flex flex-col gap-8 ${(View_Mode=="DARK")?(bg-[rgb(55_55_55)]):""} w-[40px] p-3 items-center h-full`}> */}
        <div className={`text-white sticky z-40 flex flex-col gap-8 ${View_Mode === "DARK" ? "bg-slate-900 text-white" : "bg-slate-500 text-black"} w-[40px] p-3 items-center h-full`}>
          {
            sidenav_options_icons.map((item, index) => {
              return (
                <button key={index} onClick={
                  () => {
                    set_sidenav_selected_opt(item['opt_name']);
                    // console.log("now selected side bar option is :- ",sidenav_selected_opt);
                    // set_sidenav_status(true); //on click the button it make visiable the side bar
                    // set_togal_btn((prevStates) => ({
                      
                    //   ...prevStates,
                    //   previeus_sidebar_opt: `${item['opt_name']}`,
                    // }))
                    // if (togal_btn.previeus_sidebar_opt === item['opt_name']) {
                    if (sidenav_selected_opt === item['opt_name']) {
                      // console.log("the selected opt is :-"+sidenav_selected_opt);
                      
                      // console.log("same button is click multiple time");
                      set_sidenav_status(!sidenav_status);
                      // set_sidenav_status(false);
                      // set_togal_btn((prevStates) => ({
                      //   ...prevStates,
                      //   previeus_sidebar_opt: "",
                      // }))
                    }
                    else{
                      // set_sidenav_status(!sidenav_status); //on click the button it make visiable the side bar
                      set_sidenav_status(true); //on click the button it make visiable the side bar

                    }
                  }
                }>
                  <i className={`${item['icon_name']} text-2xl`}   ></i>
                </button>
              )
            })

          }
          <div className="absolute bottom-16">
            <DarkMode></DarkMode>
          </div>
        </div>

        <div className={`${View_Mode === "DARK" ? "bg-[rgb(10_33_62)] text-black" : "bg-slate-400 text-black"} overflow-auto p-2  transition-transform duration-300 ${sidenav_status ? "translate-x-0 w-[16rem]" : "-translate-x-full w-0"}`} >
          {
            (sidenav_selected_opt.toUpperCase() == sidenav_options_icons[0]['opt_name']) ? // MESSAGES
              (
                <>
                <Side_Bar_search></Side_Bar_search>
                  <Generate_contacts></Generate_contacts>
                  <div className='h-10'></div>
                </>
              ) :
            (sidenav_selected_opt.toUpperCase() == sidenav_options_icons[1]['opt_name']) ? //SEARCH
              (
                <>
                  <Side_Bar_search></Side_Bar_search>
                  <p>it is search</p>
                </>
              ) :
            (sidenav_selected_opt.toUpperCase() == sidenav_options_icons[2]['opt_name']) ? // REELS
              (
                <>
                  <p>it is reels</p>
                </>
              ) :
            (sidenav_selected_opt.toUpperCase() == sidenav_options_icons[3]['opt_name']) ? // CALLS
              (
                <>
                  <p>it is calls</p>
                </>
              ) :
            (
              null
            )
          }

        </div>
      </div>


    </>
  )
}