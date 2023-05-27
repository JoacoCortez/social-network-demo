import React from 'react';
import "./sideNavbar.css";
import { FaHome, FaSearch, FaPaperPlane,  } from "react-icons/fa"

export default function SideNavbar() {
  return (
    <div className='side-navbar'> 
      <img src="" alt="Logo" className='logo'/>
      <ul className='nav-list'>
        <li>
          <a href="http://">
            <FaHome/>
          </a>
          <p className='list-text'>Inicio</p>
        </li>
        <li>
          <a href="http://">
            <FaSearch/>
          </a>
          <p className='list-text'>Buscar</p>
        </li>
        <li>
          <a href="http://">
            <FaPaperPlane/>
          </a>
          <p className='list-text'>Mensajes</p>
        </li>
        <li>
          <a href="http://">
            <FaHome/>
          </a>
          <p className='list-text'>Perfil</p>
        </li>
      </ul>
    </div>
  )
}
