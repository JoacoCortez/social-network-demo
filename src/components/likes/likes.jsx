import React from 'react';
import {BsFillHeartFill} from "react-icons/bs"
import "./likes.css";




export default function Likes() {
  return (
    <div className='likes'>
        <BsFillHeartFill/>
        <p className="likes-number"></p>
    </div>
  )
}
