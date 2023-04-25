import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import useFetch from '../Hooks/useFetch';

import userImg from '../assests/images/user.png'
import useGetData from '../Hooks/useGetData';

const MainPage = ({ user }) => {

  const { logOutUser } = useGetData()
  
  const [ data, error ] = useFetch(`http://localhost:5000/profile/${user._id}`, {})

  const { username, bio, userPfp } = data;
    
  return (
    <div className='main-page-container'>
        <div className='sidebar'>
            <Sidebar user={user}/>
        </div>  
        <div className='dashboard-data'>
          <div className='dashboard-first-thing'>
            <h1>Good Evening, <span className='purple'> {username}</span></h1>
            <button className="logout-button-mainpage" onClick={logOutUser}>
              Log out
            </button>
          </div>
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