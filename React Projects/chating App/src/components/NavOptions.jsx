import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useContext } from 'react';
import { TheContext } from '../storage/Function_Storages';



function NavOpt() {
  const {Navoption} = useContext(TheContext)
  // console.log(Navoption);
  console.log(document)
  return (
    <>
    {Navoption.map((item,index) => (
      <li key={index} className="nav-item border">
        <a href="#" className="gap-3 fs-5 nav-link link-body-emphasis active d-flex align-items-center justify-content-cente" aria-current="page">
          <i className={`bi ${item.iconBootstrap} d-flex justify-content-center align-items-center gap-3`}></i>
            <p>{item.title}</p>
        </a>
      </li>
    ))}


    </>
  )
}
export default NavOpt;