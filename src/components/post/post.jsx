import React from 'react';
import axios from "axios";
import titi from "../../media/eltiti.jpg";
import Post from '../../../server/models/post';
import "./post.css";




export default function Post() {
  

  async function handleInteraction(postID, userID, interactions){
      //Guarda la reaccion en la base de datos (AXIOS?)
      try {
        const newInteraction = await axios.post("/api/interactions", {
          postID, 
          userID,
          interactions
        })



        
        
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
        <img src={titi} alt="Post" />
      </div>
      <div className="post-interactions">
        {/* mostrar interacciones  */}
        {newInteraction.interactions.length !== 0 ? 
          newInteraction.interactions
          :
          ""
        }
        
        <div className="post-interactions-controlls">
          <button className="button-interaction" onClick={handleInteraction()}>A</button>
          <button className="button-interaction" onClick={handleInteraction()}>B</button>
          <button className="button-interaction" onClick={handleInteraction()}>C</button>
        </div>  
      </div>
      <div className="post-comments">
      
      </div>
    </div>
  )
}
