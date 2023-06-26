import React, { useEffect, useState } from 'react';
import axios from "axios";
import foto from "../../media/batman.jpg";
import Post from '../../server/models/post';
import Profile from '../profile/profile';
import {BsFillHeartFill} from "react-icons/bs"
import "./post.css";



export default function PostTab() {
  
  const [posts, setPosts] = useState([])
  const [interaction, setInteraction] = useState([])





  useEffect( () =>{
    const fetchPost = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/post/home")
        
        console.log(response.data)
        setPosts(response.data)

      } catch (error) {
        console.log("FETCH POST ERROR: ", error)
      }
      

    }
    fetchPost()

  },[])
  
  
  async function handleInteraction(event, _id, userID, interactionType){
      //Guarda la reaccion en la base de datos (AXIOS?)
      try {
        const targetValue = event.target.dataset.interactionType

        const newInteraction = await axios.put("http://localhost:8080/api/interactions", {
          _id, 
          userID,
          targetValue
        })
      
        console.log(newInteraction)
        setInteraction([...interaction, newInteraction.targetValue])

        
        
      } catch (error) {
        console.log("HANDLE INTERACTION ERROR: ", error)
      }
  }
  
  
  
  return (
    


      <div className='post-container'>
        {posts.map(post =>(
          <div className="post" key={post._id}>
            <div className="post-author">
              <Profile size={"author"}/>
            </div>
            <div className="post-content">
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
                <button className="button-interaction-like" data-interaction-type='like' onClick={(event) => handleInteraction(event, post._id, "like")}>
                  <BsFillHeartFill/>
                </button>
              </div>  
            </div>
            <div className="post-comments">
            
            </div>
          </div>   
        ))}
      </div>
  )
}
