import React, { useState } from 'react';
import "./login.css";
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState({
    username: "",
    password: ""
  })
  const [newUser, setNewuser] = useState({
    username: "",
    password: "",
    passwordVerify: password

  })
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  //Sacamos la lista de usuarios de una base de datos en mongo
  


  async function handleChange(e){
    setFormValue({
      ...formValue, [e.target.name]: e.target.value
    })
    

    

  }
  


  async function handleVerify(e){
    e.preventDefault()
    const query = await axios.post("http://localhost:8080/api/user/login", {
      username: formValue.username,
      password: formValue.password
    });
    console.log(query)

    if(query.status === 302 || 200){
      console.log("Login successfull")
      navigate("/")
    }else{
      setFormValue({
        username: "",
        password: ""
      })
    }
  }

  
  async function handleSubmit(e){
    try {
      e.preventDefault()
      const query = await axios.post("", {
        username: newUser.username,
        password: newUser.password

      })    



    } catch (error) {
      console.log("Register form failed", error)
    }
  }



  
  

    return (
      <>
        <div className='login'>
          <div className="login-form-container">
              <h2>Red Social</h2>
              <form className="login-form" onSubmit={handleVerify}>
                <input className="form-input" type="text" name="username" placeholder='Nombre de usuario' value={formValue.username} onChange={handleChange} required/>
                <input className="form-input" type="text" name="password" placeholder='Contraseña' value={formValue.password} onChange={handleChange} required/>
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
            <form onSubmit={handleSubmit} className="sign-up-form">
              <input className='form-input' type="text" name="username" value={newUser.username} placeholder='Nombre de usuario' required/>
              <input className='form-input' type="text" name="password" value={newUser.password} placeholder='Contraseña' required/>
              <input className='form-input' type="text" name="password" value={newUser.password} placeholder='Confirmar contraseña' required/>
              <input type="submit" className='form-submit' />
            </form>
          </Modal.Body>
        </Modal>
      </>
    );

}










































