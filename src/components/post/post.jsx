import React, { useState } from 'react';
import axios from "axios";
import foto from "../../media/batman.jpg";
import Post from '../../server/models/post';
import "./post.css";




export default function PostTab() {
  
  const [interaction, setInteraction] = useState([])

  async function handleInteraction(postID, userID, interactionType){
      //Guarda la reaccion en la base de datos (AXIOS?)
      try {
        const newInteraction = await axios.post("/api/interactions", {
          postID, 
          userID,
          interactionType
        })

        setInteraction(newInteraction)

        
        
      } catch (error) {
        console.log("HANDLE INTERACTION ERROR: ", error)
      }
  }
  
  
  
  return (
    <div className='post-container'>
      <div className="post-author">
        <img src="" alt="Profile-picture-author"/>
        <p>Nene chisito</p>
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
          <button className="button-interaction" onClick={handleInteraction}>A</button>
          <button className="button-interaction" onClick={handleInteraction}>B</button>
          <button className="button-interaction" onClick={handleInteraction}>C</button>
        </div>  
      </div>
      <div className="post-comments">
      
      </div>
    </div>
  )
}
