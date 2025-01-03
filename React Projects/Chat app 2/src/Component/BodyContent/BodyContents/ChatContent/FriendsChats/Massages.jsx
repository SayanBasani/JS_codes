export default function Massages({ chatjsons }) {

  return (
    <>
      {chatjsons.map((item, index) => {
        console.log(item)
        console.log(item.scr_img)
        return item.sender == 'me' ?
          (<div key={index} className="flex items-center mb-4">
            {

              (item.scr_img === "") ? (<i className={item.sender_img}></i>)
                :( <img className="w-8 h-8 rounded-full mr-2" src="https://picsum.photos/50/50" alt="User 1 Avatar" />)
            }
            {/* <img
          className="w-8 h-8 rounded-full mr-2"
          src="https://picsum.photos/50/50"
          alt="User 1 Avatar"
        /> */}

            <div className="bg-white p-3 rounded-lg shadow-md max-w-xs">
              {item.massage}
            </div>
          </div>)
          :

          (<div key={index} className="flex justify-end items-center mb-4">
            <div className="bg-blue-500 text-white p-3 rounded-lg shadow-md max-w-xs mr-2">
            {item.massage}
            </div>
            {/* <img
          className="w-8 h-8 rounded-full"
          src="https://picsum.photos/50/50"
          alt="User 2 Avatar"
        /> */}
            <i className={item.sender_img}></i>

          </div>)
      }
      )}
    </>
  )
}