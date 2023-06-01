import React, { useState } from 'react';
import "./sideNavbar.css";
import { FaHome, FaSearch, FaPaperPlane,  } from "react-icons/fa"
import { Link } from 'react-router-dom';
import SearchTab from '../search-tab/searchTab';

export default function SideNavbar() {
  
  const [show, setShow] = useState(false)
  
  function handleShow(){
    if(show === true){
      setShow(false)
    }else if(show === false){
      setShow(true)

    }
  }
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <div className='side-navbar'>
      <img src="" alt="Logo" className='logo'/>
      <ul className='side-nav-list'>
        { show ? <SearchTab/> :
          <>
            <li>
              <Link to={"/"}>
                <FaHome/>
              </Link>
              <p className='list-text'>Inicio</p>
            </li>
            <li>
              <button onClick={handleShow}>
                <FaSearch/>
              </button>
              <p className='list-text'>Buscar</p>
            </li>
            <li>
              <button onClick={handleShow}>
                <FaPaperPlane/>
              </button>
              <p className='list-text'>Mensajes</p>
            </li>
            <li>
              <Link to={"/profile"}>
                <FaHome/>
              </Link>
              <p className='list-text'>Perfil</p>
            </li>
          </>
        }
      </ul>
    </div>
  )
}
