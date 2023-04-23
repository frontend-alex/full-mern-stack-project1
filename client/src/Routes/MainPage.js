import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'

const MainPage = ({ user }) => {
  return (
    <div className='main-page-container'>
        <div className='sidebar'>
            <Sidebar user={user}/>
        </div>  
    </div>
  )
}

export default MainPage