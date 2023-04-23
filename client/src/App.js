import React from 'react';

import { Route, Routes } from 'react-router-dom';

//components
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Routes/LandingPage';
import MakeAccount from './Routes/MakeAccount';


//hooks
import useAuth from './Hooks/useAuth';
import MainPage from './Routes/MainPage';
import ErrorPage from './Routes/ErrorPage';

const App = () => {

  const [ user ] = useAuth();

  return (
    <div className='app-container'>

      <Navbar/>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<MakeAccount/>}/>
        <Route path='*' element={<ErrorPage/>}/>
       { user ? <Route path='/main' element={<MainPage user={user}/>}/> : <Route path='/register' element={<MakeAccount/>}/>}
      </Routes>
    </div>
  )
}

export default App