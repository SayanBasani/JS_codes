import { useContext } from "react";
import { Somecontext } from "./storage";
export default function TopNav() {
  const { sidenav_status, set_sidenav_status,View_Mode, set_View_Mode } = useContext(Somecontext);
  // console.log(sidenav_status);
  // set_sidenav_status(true)
  // console.log(sidenav_status);
  return (
    <>
      <div className="grid grid-cols-[40px_1fr_40px] ">

        <button className="flex justify-center items-center" onClick={() => {
          set_sidenav_status(!sidenav_status);
        }}>
          {sidenav_status ? (
            <>
              <i className="bi bi-x-lg text-xl"></i>
            </>
          ) : (
            <>
              <i className="bi-list text-2xl "></i>
            </>
          )}
        </button>

        <form action="" method="post" className="flex justify-center items-center">
          <input className="rounded-l-xl h-7 w-[70%] min-w-[100px]" type="search" name="" id="" />
          <button className="h-7 px-3 rounded-r-xl bg-slate-200 text-black">
            
            <i className="bi bi-search text-[20px]"></i>
          </button>
        </form>

        <div className="flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
          </svg>
        </div>

      </div>
    </>
  )
}