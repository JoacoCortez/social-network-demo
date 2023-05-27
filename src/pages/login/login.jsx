import React from 'react';
import "./login.css";


export default function Login() {
  
  //Sacamos la lista de usuarios de una base de datos en mongo
  
  async function verifyUser(){




  }
  
  
  
  
  
  
  
  
  
  return (
    <div className='login'>
        <div className="login-form-container">
            <h2>Red Social</h2>
            <div className="login-form">
                {/* <form onSubmit={s}>
                    <input className="form-input" type="text" name="username" value={username} onChange={handleChange()} placeholder='Nombre de usuario'/>
                    <input className="form-input" type="hidden" name="password" value={password} onChange={handleChange()} placeholder='Contraseña'/>
                    <input className="form-submit" type="submit" value={s}/>
                </form>     */}
            </div>
            <p className="register-text">No tengo cuenta, <a href="http://">Registrame</a></p>
        </div>
    </div>
  )
}
