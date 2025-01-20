export default function Chat_input() {
  return (
    <>
      
      <div className="h-12 grid grid-cols-[40px_1fr] gap-5 px-14 w-full items-center absolute bottom-0 bg-[rgb(58_58_58)] ">
        <div className="flex justify-center items-center w-10 h-10 cursor-pointer rotate-90">
          <i className="bi bi-paperclip text-2xl "></i>
        </div>

        <div className=" flex flex-row-reverse items-center gap-3 px-4 md:px-10 w-full md:w-auto">
          <button className="flex-shrink-0 rotate-45">
            {/* <span class="material-symbols-outlined">
              send
            </span> */}
            <i className="bi bi-send-fill text-2xl"></i>
          </button>
          <input
            className="flex-grow md:w-[70%] focus:outline-none bg-[rgb(58_58_58)] placeholder-gray-400 text-white p-2 rounded"
            placeholder="Type a message"
            type="text"
          />
        </div>
      </div>

    </>
  )
}