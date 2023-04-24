import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import useFetch from '../Hooks/useFetch';

const MainPage = ({ user }) => {

   const userImg =
    "https://o.remove.bg/downloads/73b0a066-b871-4962-aff3-6d0086bb1ef1/436-4363443_view-user-icon-png-font-awesome-user-circle-removebg-preview.png";

  const [ data, error ] = useFetch(`http://localhost:5000/profile/${user._id}`, {})

  const { username, bio, userPfp } = data;
    
  return (
    <div className='main-page-container'>
        <div className='sidebar'>
            <Sidebar user={user}/>
        </div>  
        <div className='dashboard-data'>
          <h1>Good Evening, <span className='purple'> {username}</span></h1>
          <div className='card-1'>
            <img src={!userPfp ? userImg : userPfp}/>
            <div className='dashboard-data-user-crednetials'>
              <h3>{username}</h3>
              <p>{user.email}</p>
              <hr />
              <span className='bio'>{bio ? bio : 'User dont have a bio yet!'}</span>
            </div>
          </div>
        </div>
        <div className='dashboard-accessories'>

        </div>
    </div>
  )
}

export default MainPage