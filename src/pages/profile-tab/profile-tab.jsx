import React from 'react';
import SideNavbar from '../../components/side-navbar/sideNavbar';
import Profile from '../../components/profile/profile';
import PostTab from '../../components/post/post';
import "./profile-tab.css";



export default function ProfileTab() {
  return (
    <div className='profile-tab'>
      <SideNavbar/>
      <div className="profile-tab-items">
        <Profile size="big"/>
      </div>
    
      <PostTab/>
    
    </div>
      
      

    
  )
}
