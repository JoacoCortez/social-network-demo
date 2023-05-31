import React from 'react';
import "./login.css";
import { Link } from 'react-router-dom';


export default function Login() {
  
  //Sacamos la lista de usuarios de una base de datos en mongo
  
  // del form

  {/*value={username} onChange={handleChange()}*/} 
{/*value={password} onChange={handleChange()}*/} 


  async function verifyUser(){




  }
  
  
  
  
  
  
  
  
  
  return (
    <div className='login'>
        <div className="login-form-container">
            <h2>Red Social</h2>
            <form className="login-form" onSubmit={""}>
              <input className="form-input" type="text" name="username" placeholder='Nombre de usuario'/>
              <input className="form-input" type="text" name="password" placeholder='Contraseña'/>
              <input className="form-submit" type="submit"/>
            </form>    
            <p className="register-text">No tengo cuenta, <Link to={"/register"}>Registrame</Link></p>
        </div>
    </div>
  )
}
