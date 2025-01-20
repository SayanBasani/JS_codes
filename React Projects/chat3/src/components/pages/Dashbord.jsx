import React from 'react'
import SideNav from '../sideNav/sideNav'
import TopNav from '../nav'
import Body_contents from '../chat_box_components/bodyContents'

export default function Dashbord() {
  return (
    <>
      <div className=''>
        <div className='z-10 bg-[rgb(33_33_33)] text-white fixed w-full h-11 top-0 grid items-center'>
          <TopNav></TopNav>
        </div>
        <div className='z-10 top-11 fixed h-screen'>
          <SideNav></SideNav>
        </div>
        <div className='z-0 bg-slate-600 overflow-y-auto h-screen'>
          <Body_contents></Body_contents>
        </div>
      </div>
    </>
  )
}
