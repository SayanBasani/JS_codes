import React from 'react'
import { NavLink } from "react-router";
export default function HomeNav() {
  return (
    <>
      {/* <nav className='bg-slate-700 h-10 text-white items-center grid '>
      <ul className='grid grid-cols-4 justify-between '>
        <li><NavLink onClick={(is_active)=>{is_active?"navactive":""}} to="/">Home</NavLink></li>
        <li><NavLink to="/Dashbord">Dashbord</NavLink></li>
        <li><NavLink to="/account/singup">Singup</NavLink></li>
        <li><NavLink to="/account/login">Login</NavLink></li>
      </ul>
    </nav> */}
      <nav className='bg-slate-800 h-10 text-white flex items-center'>
        <ul className='grid grid-cols-4 w-full justify-between'>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav_active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Dashbord" className={({ isActive }) => (isActive ? "nav_active" : "")}>
              Dashbord
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/singup" className={({ isActive }) => (isActive ? "nav_active" : "")}>
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/login" className={({ isActive }) => (isActive ? "nav_active" : "")}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>

    </>
  )
}
