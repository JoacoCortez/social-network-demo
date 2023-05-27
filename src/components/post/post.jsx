import React from 'react';
import titi from "../../media/eltiti.jpg";
import "./post.css";



export default function Post() {
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
        <li>A</li>
        <li>s</li>
        <li>2</li>
        <li>3</li>
      </div>
      <div className="post-comments">
      
      </div>
    </div>
  )
}
