import React from 'react';
import "./searchTab.css";
import Profile from '../profile/profile';

export default function SearchTab() {
  return (
    <div className='search-tab-container'>
        <div className="search-tab">
            <input type="text" placeholder='Buscar'/>
            <input type="submit" name='seacrh' />
        </div>
        <div className="search-results">
            <Profile/>
        </div>
    </div>
  )
}
