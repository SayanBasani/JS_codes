import 'bootstrap-icons/font/bootstrap-icons.css';
import { useContext, useState } from 'react';
import { TheContext } from '../Storages/Store&Functions';

export default function Nav({ setNavWidth }) {
  const abc = useContext(TheContext);
  // console.log(abc);

  const { Navoption, setselectNav, selectNav } = useContext(TheContext);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded == true) {
      setNavWidth("48px")
    } else {
      setNavWidth("192px")
    }
  };

  return (
    <div className={` bg-gray-800 text-white h-screen transition-all duration-300 ease-in-out ${isExpanded ? 'w-[192px]' : 'w-[48px]'}`}>
      <div className=" w-10 p-3 flex sticky top-0 bg-gray-800">
        <button onClick={toggleSidebar}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12M6 6h12M6 18h12" />
          </svg>
        </button>
      </div>

      <ul className="mt-5 space-y-2 text-center flex flex-col justify-center">
        {Navoption.map((items, index) => (
          <li key={index} 
          className={`${selectNav === items.title ? 'bg-blue-500' : ''} pl-3 pr-3 pb-2 pt-2 flex flex-row gap-3 cursor-pointer`}
          onClick={() => (
            setselectNav(items.title),
            console.log(`it is from Nav.jsx ${items.title}`),
            console.log(`it is Nav.jsx ${selectNav}`)
            
          )}
          >
            <i className={`bi ${items.iconBootstrap}`}></i>
            {isExpanded && <span className="text-xs font-bold flex items-center">{items.title}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}


