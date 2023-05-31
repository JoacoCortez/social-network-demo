import React from 'react'
import chano from "../../media/chano.jpg";
import "./profile.css";
import { Link } from 'react-router-dom';



const Small = () =>{

  return (
    <div className='profile-container-small'>
      <Link to={"/profile"}>
        <img src={chano} alt="profile-picture" className='profile-img-small'/>
      </Link>
      <p className="profile-name-small">Joaquin Cortez</p>
      <button className="profile-opts">+</button>
    </div>
  )
}

const Big = () =>{

  return(
    <div className='profile-container-big'>
        <img src={chano} alt="profile-picture" className='profile-img-big'/>
      <div className="profile-items">
        <p className="profile-name-big">Joaquin Cortez</p>
        <ul>
          <li>100 seguidores</li>
          <li>5 publicaciones</li>
        </ul>
      </div>
    </div>
  )
}



export default function Profile({size}) {
  
  if(size === "small"){
    return <Small/>
  }else if(size === "big"){
    return <Big/>
  }
}



