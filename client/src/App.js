import React from 'react';

import { Route, Routes } from 'react-router-dom';

//components
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Routes/LandingPage';
import MakeAccount from './Routes/MakeAccount';

import MainPage from './Routes/MainPage';
import ErrorPage from './Routes/ErrorPage';
import UpdateProfile from './Routes/UpdateProfile';


//hooks
import useAuth from './Hooks/useAuth';
import useFetch from './Hooks/useFetch';



const App = () => {

  const [ user ] = useAuth();

  return (
    <div className='app-container'>

      <Navbar/>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<MakeAccount user={user}/>}/>

        { user ? <Route path='/dashboard/:userId' element={<MainPage user={user}/>}/> : <Route path='/register' element={<MakeAccount/>}/>}
        { user ? <Route path='/edit/:userId' element={<UpdateProfile user={user} />}/> : <Route path='/register' element={<MakeAccount/>}/>}
        
        <Route path='*' element={<ErrorPage user={user} />}/>
      </Routes>
       
    </div>
  )
}

export default App