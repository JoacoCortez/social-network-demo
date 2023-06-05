import React, { useState, useRef } from 'react'
import chano from "../../media/chano.jpg";
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import "./profile.css";



const Small = () =>{

  
  
  return (
    <div className='profile-container-small'>
      <Link to={"/profile"}>
        <img src={chano} alt="profile-picture" className='profile-img-small'/>
      </Link>
      <p className="profile-name-small">Joaquin Cortez</p>
      <button className="profile-opts">+</button>
    </div>
  )
}

const Big = () =>{
  const [hovered, setHovered] = useState(false)
  const [show, setShow] = useState(false)
  const [inputShow, setInputShow] = useState(false)
  const [fileSelected, setFileSelected] = useState(null)
  const fileInputRef = useRef(null);

  const handleEnter = () => setHovered(true)
  const handleLeave = () => setHovered(false)
  
  const handleClose = () => {
    setShow(false)
    if(inputShow === true){
      setInputShow(false)
    }
  }
  const handleShow = () => setShow(true)
  
  const handleInputShow = () => setInputShow(true)
  
  const handleClick = () => {fileInputRef.current.click()}
  const handleFileChange = (event) => setFileSelected(event.target.files[0])
  
  const handleSubmit = () => {
    console.log(fileSelected)

  }
  


  

  return(
    <>
      <div className='profile-container-big'>
        <div className="edit-profile">
          <img src={chano} alt="profile-picture" onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleShow} className={`profile-img-big ${hovered ? "profile-img-big-hovered" : ""}`}/>
          {
            hovered && 
            <FaEdit/>
          }
        </div>
        <div className="profile-items">
          <p className="profile-name-big">Joaquin Cortez</p>
          <ul>
            <li>100 seguidores</li>
            <li>5 publicaciones</li>
          </ul>
        </div>
      </div>
  
  
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Editar Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="picture-edit-container">
            <img src={chano} alt="Picture edit" className='picture-edit'/>
            <input ref={fileInputRef} style={{ display: 'none' }} type="file" accept='image/*' onChange={handleFileChange} placeholder='Cambiar foto de perfil'/>
            <button type="button" className="picture-edit-button" onClick={handleClick}>
              Cambiar foto de perfil
            </button>
          </div>
          <div className="username-edit-container">
            <div className="username-edit-opts">
              <h3 className="username-edit-h3">Nombre de Usuario</h3>  
              <p className="username">Joaquin Cortez</p>
            </div>
            <button onClick={handleInputShow} className="username-edit-button">
              Cambiar nombre de usuario
            </button>
          </div>
          {
            inputShow &&
              <div className="username-edit-input-container">
                <input  type="text" name="usernameUpdate" className='username-edit-input' placeholder='Nuevo nombre de usuario'/>
                <input type="submit" className='username-edit-input-submit' />
            </div>
          }
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Descartar
          </button>
          <button onClick={handleSubmit}>Guardar cambios</button>
        </Modal.Footer>
      </Modal>
  
    </>
  )
}


const Author = () =>{

  return(
    <div className='profile-container-author'>
      <Link to={"/profile"}>
        <img src={chano} alt="profile-picture" className='profile-img-author'/>
      </Link>
      <p className="profile-name-author">Joaquin Cortez</p>
    </div>
  )
}






export default function Profile({size}) {
  
  if(size === "small"){
    return <Small/>
  }else if(size === "big"){
    return <Big/>
  } else {
    return <Author/>
  }
}

























