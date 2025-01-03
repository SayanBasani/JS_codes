export default  function MainNav(params) {
  return (
    <>
    <div className="grid grid-cols-[40px,1fr] bg-green-400 top-0">
      <div className="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
      </div>
      <div className="grid grid-cols-[60px,1fr,60px] p-2 gap-2 items-center">
        <div className="flex justify-center">Home</div>
        <div className="mx-2 flex justify-center">
          <input className="h-8 w-full max-w-[500px] rounded-[20px]" type="text" />
        </div>
        <div className="flex justify-center items-center">Profile</div>
      </div>
    </div>
    </>
  )
}