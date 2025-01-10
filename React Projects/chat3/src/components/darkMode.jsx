import { useContext } from "react";
import { Somecontext } from "./storage";
export default function DarkMode() {
  const {View_Mode, set_View_Mode} = useContext(Somecontext);
  return (
    <>
      <button className="" onClick={
        () => {
          
          if (View_Mode === "BRIGHT") {
            set_View_Mode("DARK");
          }
          else{
            set_View_Mode("BRIGHT");
          }
          
        }
      }>
        {
          (View_Mode === "BRIGHT") ? (
            <>
              <i className="bi bi-brightness-high-fill text-2xl"></i>
            </>

          ) : (View_Mode === "DARK") ? (
            <>
              <i className="bi bi-moon-fill text-2xl"></i>
            </>
          ) : (
            <>
              <i className="bi bi-brightness-high-fill text-2xl"></i>
              {/* NaN */}
            </>
          )
        }
      </button>
    </>
  )
}
