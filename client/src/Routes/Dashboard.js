import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import useFetch from '../Hooks/useFetch';

import userImg from '../assests/images/user.png'
import useGetData from '../Hooks/useGetData';
import SidebarMobile from '../Components/Sidebar/SidebarMobile';

const Dashboard = ({ user }) => {

  const { logOutUser } = useGetData()
  
  const [ data, error ] = useFetch(`http://localhost:5000/profile/${user._id}`, {})


  return (
    <div className='main-page-container'>
        <div className='sidebar'>
          <div className='sidebar-pc'>
            <Sidebar user={user}/>
          </div>
          <div className="sidebar-phone">
            <SidebarMobile user={user}/>
          </div>
        </div>  
        <div className='dashboard-data'>
          <div className='dashboard-first-thing'>
            <h1>Good Evening, <span className='purple'> {data?.username}</span></h1>
            <button className="logout-button-mainpage" onClick={logOutUser}>
              Log out
            </button>
          </div>

        </div>
        <div className='dashboard-accessories'>

        </div>
    </div>
  )
}

export default Dashboard 