import React, { useState } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

export default function Login() {
  
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  //Sacamos la lista de usuarios de una base de datos en mongo
  
  // del form

  {/*value={username} onChange={handleChange()}*/} 
{/*value={password} onChange={handleChange()}*/} 


  async function verifyUser(){




  }
  
  
  
  

    return (
      <>
        <div className='login'>
          <div className="login-form-container">
              <h2>Red Social</h2>
              <form className="login-form" onSubmit={""}>
                <input className="form-input" type="text" name="username" placeholder='Nombre de usuario'/>
                <input className="form-input" type="text" name="password" placeholder='Contraseña'/>
                <input className="form-submit" type="submit"/>
              </form>    
              <p className="register-text">No tengo cuenta, <button onClick={handleShow}>Registrame</button></p>
          </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>  
   
             
        
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Registrando Usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="" className="sign-up-form">
              <input className='form-input' type="text" placeholder='Nombre de usuario'/>
              <input className='form-input' type="text" placeholder='Contraseña' />
              <input className='form-input' type="text" placeholder='Confirmar contraseña' />
              <input type="submit" className='form-submit' />
            </form>
          </Modal.Body>
        </Modal>
      </>
    );

}










































