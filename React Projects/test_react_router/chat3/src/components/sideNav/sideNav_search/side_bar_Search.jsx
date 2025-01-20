import { useContext } from "react"
import { Somecontext } from "../../storage"
export default function Side_Bar_search() {
  const { View_Mode } = useContext(Somecontext);

  return (
    <>
      <div className={`bg-zi-700 w-full pt-4 ${View_Mode === "DARK" ? "text-white" : "to-black"}`}>
        <div className="flex w-full">
          <input className="focus:outline-none rounded-l-lg h-8 w-full text-black px-2" placeholder=" Search in Your Contacts" type="text" />
          <button className=" pl-2 pr-2 bg-white rounded-r-lg text-black flex justify-center items-center">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </>
  )
}