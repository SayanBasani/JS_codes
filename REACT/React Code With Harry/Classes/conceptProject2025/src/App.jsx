import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainNav from './components/nav'
import BodyContent from './components/body'
import CalContextProvider from './components/calulater_comp/cal_stor_logc'
function App() {
  let heading = "Concept Project 2025";
  // console.log(heading);
  // console.log(heading.slice(0,-1));
  
  return (
    <>
      <CalContextProvider>
        <div>
          <nav className='sticky top-0 z-50 w-full shadow-md'>
            <MainNav/>
          </nav>
          <h1 className='flex justify-center'>{heading}</h1>
          <BodyContent/>
        </div>
      </CalContextProvider>
    </>
  );
}

export default App
