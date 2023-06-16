import React, { useState } from 'react';
import axios from "axios";
import foto from "../../media/batman.jpg";
import Post from '../../server/models/post';
import "./post.css";
import Profile from '../profile/profile';




export default function PostTab() {
  
  const [interaction, setInteraction] = useState([])

  async function handleInteraction(event, postID, userID, interactionType){
      //Guarda la reaccion en la base de datos (AXIOS?)
      try {
        const targetValue = event.target.dataset.interactionType

        const newInteraction = await axios.post("http://localhost:8080/api/interactions", {
          postID, 
          userID,
          targetValue
        })

        setInteraction(newInteraction)

        
        
      } catch (error) {
        console.log("HANDLE INTERACTION ERROR: ", error)
      }
  }
  
  
  
  return (
    <div className='post-container'>
      <div className="post-author">
        <Profile size={"author"}/>
      </div>
      <div className="post">
        <img src={foto} alt="Post" className='post-media'/>
      </div>
      <div className="post-interactions">
        {/* mostrar interacciones  */}
        {interaction.length !== 0 ? 
          interaction
          :
          ""
        }
        
        <div className="post-interactions-controlls">
          <button className="button-interaction" data-interaction-type='confused' onClick={handleInteraction}>A</button>
          <button className="button-interaction" data-interaction-type='funny' onClick={handleInteraction}>B</button>
          
          <button className="button-interaction-like" data-interaction-type='like' onClick={handleInteraction}>C</button>
        </div>  
      </div>
      <div className="post-comments">
      
      </div>
    </div>
  )
}
