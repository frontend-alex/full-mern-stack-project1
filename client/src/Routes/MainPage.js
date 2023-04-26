import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import useFetch from '../Hooks/useFetch';

import userImg from '../assests/images/user.png'
import useGetData from '../Hooks/useGetData';

const MainPage = ({ user }) => {

  const { logOutUser } = useGetData()
  
  const [ data, error ] = useFetch(`http://localhost:5000/profile/${user._id}`, {})

  return (
    <div className='main-page-container'>
        <div className='sidebar'>
            <Sidebar user={user}/>
        </div>  
        {/* <div className='dashboard-data'>
          <div className='dashboard-first-thing'>
            <h1>Good Evening, <span className='purple'> {data?.username}</span></h1>
            <button className="logout-button-mainpage" onClick={logOutUser}>
              Log out
            </button>
          </div>
          <div className='card-1'>
            <img src={!data?.userPfp ? userImg : data?.userPfp}/>
            <div className='dashboard-data-user-crednetials'>
              <h3>{data?.username}</h3>
              <p>{data?.email}</p>
              <hr />
              <span className='bio'>{data?.bio ? data?.bio : 'User dont have a bio yet!'}</span>
            </div>
          </div>
        </div> */}
        <div className='dashboard-accessories'>

        </div>
    </div>
  )
}

export default MainPage