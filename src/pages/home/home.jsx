import React from 'react';
import SideNavbar from '../../components/side-navbar/sideNavbar';
import TopNavbar from '../../components/top-navbar/topNavbar';
import Post from '../../components/post/post';
import PeopleTab from '../../components/people-tab/peopleTab';
import "./home.css";



export default function Home() {
  
  
  
  return (
    <div className='home'>
      <SideNavbar/>
      <TopNavbar/>
      <PeopleTab/>
      <Post/>
    </div>







  )
}
