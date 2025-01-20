
import { useContext } from 'react';
import DarkMode from '../darkMode';

// import './login.css'; // You can style it separately if needed
import ContextProvider, { Somecontext } from '../storage';

export default function User_login() {
  const { View_Mode, set_View_Mode } = useContext(Somecontext);

  return (
    <div className={`${View_Mode === "DARK" ? "bg-slate-700" : "bg-slate-200"} w-screen h-screen flex justify-center items-center`}>
      <nav className='bg-gray-800 absolute text-white px-2 flex items-center left-4 rounded-lg bottom-5'>
        <DarkMode />
      </nav>
      <div className={`${View_Mode === "DARK" ? "bg-slate-800" : "bg-slate-100"} m-40 p-10 grid shadow-lg rounded-lg w-[500px]`}>
        <form action="" method="post" className='grid justify-center gap-5'>
          <label htmlFor="">
            <input type="text" placeholder="Enter Your Email" />
          </label>

          <label htmlFor="">
            <input type="password" placeholder="Enter Your Password" />
          </label>
          <button className="px-6 rounded-md h-8 font-medium m-auto bg-blue-500 w-fit">Login</button>
        </form>
      </div>
    </div>
  );
}
