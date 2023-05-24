import React from 'react'

export default function SideNavbar() {
  return (
    <div className='side-navbar'> 
      <img src="" alt="Logo" className='logo'/>
      <ul className='nav-list'>
        <li>
          <p className='list-text'>Inicio</p>
        </li>
        <li>
          <p className='list-text'>Buscar</p>
        </li>
        <li>
          <p className='list-text'>Mensajes</p>
        </li>
        <li>
          <p className='list-text'>Perfil</p>
        </li>
      </ul>
    </div>
  )
}
