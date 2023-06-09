import React from 'react';
import SideNavbar from '../../components/side-navbar/sideNavbar';
import TopNavbar from '../../components/top-navbar/topNavbar';
import PeopleTab from '../../components/people-tab/peopleTab';
import CreatePost from '../../components/create-post/createPost';
import PostTab from '../../components/post/post';
import Messages from '../../components/messages/messages';
import "./home.css";



export default function Home() {
  
  
  
  return (
    <div className='home'>
      <SideNavbar/>
      <TopNavbar/>
      <PeopleTab/>
      <CreatePost/>
      <PostTab/>
      <Messages/>
    </div>
  )
}
