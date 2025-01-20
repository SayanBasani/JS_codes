import { useContext } from 'react'
import DarkMode from '../darkMode'
import './singup.css'
import ContextProvider, { Somecontext } from '../storage'
import { useForm } from "react-hook-form"

  
export default function User_singup() {
  const { View_Mode, set_View_Mode } = useContext(Somecontext);
  // for form handel
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  // for form handel
// user_name,user_email,user_ph_no,user_iduser_password

  return (
    <div className={`${View_Mode === "DARK" ? "bg-slate-700" : "bg-slate-200"}   w-screen h-screen flex justify-center items-center `}>
      <nav className='bg-gray-800 absolute text-white px-2 flex items-center left-4 rounded-lg bottom-5'>
        <DarkMode />
      </nav>
      <div className={`${View_Mode === "DARK" ? "bg-slate-800" : "bg-slate-100"} m-40   p-10 grid shadow-lg rounded-lg w-[500px]`}>
        <form onSubmit={handleSubmit(onSubmit)} action="" method="post" className='user_singup_form grid justify-center gap-5'>
          <label className='' htmlFor="">
            <input {...register("name")} type="text" placeholder="Enter Your Name" />
          </label>

          <label htmlFor="">
            <input {...register("email")} type="text" placeholder="Enter Your Email" />
          </label>

          <label htmlFor="">
            <input {...register("number")} type="text" placeholder="Enter Your Number" />
          </label>

          <label htmlFor="">
            <input {...register("password")} type="text" placeholder="Enter Your Password" />
          </label>
          <button className="px-6 rounded-md h-8 font-medium m-auto bg-blue-500 w-fit">Singup</button>
        </form>
      </div>
    </div>
  )
}