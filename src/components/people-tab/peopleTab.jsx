import React, { useState } from 'react';
import "./people-tab.css";
// const clientSocket = io()



export default function PeopleTab() {
  const [usersList, setUsersList] = useState([])
  
  // clientSocket.on("connectedUsers", (users) =>{
  //   setUsersList(users)
  // })


  
  return (
    <div className='people-tab-container'>
      <h3 className='people-tab-h3'>Personas conectadas</h3>
      <div className="people-tab">
        
        
        <img src="" alt="" />
        <p>Tumare lambon</p>
        <div className="status">
          
        </div>
      </div>

    </div>
  )
}
