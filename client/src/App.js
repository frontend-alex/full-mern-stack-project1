import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';

//components
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Routes/LandingPage';
import MakeAccount from './Routes/MakeAccount';

import Dashboard  from './Routes/Dashboard';
import ErrorPage from './Routes/ErrorPage';
import UpdateProfile from './Routes/UpdateProfile';

import Catalog from './Routes/Catalog';
import PostAd from './Routes/PostAd';
import Cart from './Routes/Cart';


import CatalogProduct from './Routes/CatalogProduct';

//hooks
import useAuth from './Hooks/useAuth';
import Footer from './Components/Footer/Footer';





const App = () => {

  const [ user ] = useAuth();

  const [ cart, setCart ] = useState([]);
  const [ coutner, setCounter ] = useState(cart.length )




  return (
    <div className='app-container'>

      <Navbar user={user} coutner={coutner}/>

      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/register' element={<MakeAccount user={user}/>}/>
        <Route path='/catalog' element={<Catalog 
                                                user={user} 
                                                coutner={coutner}  
                                                setCounter={setCounter}

                                                cart={cart} 
                                                setCart={setCart}
                                        />}/>
                                        
        <Route path='/cart' element={<Cart 
                                          user={user} 
                                          cart={cart} 
                                          setCart={setCart}
                                      />}/>
        <Route path='/catalog/:productId' element={<CatalogProduct/>}/>

        { user ?   <Route path='/dashboard/:userId' element={<Dashboard  user={user}/>}/> : <Route path='/register' element={<MakeAccount/>}/>}
        { user ?   <Route path='/edit/:userId' element={<UpdateProfile user={user} />}/>  : <Route path='/register' element={<MakeAccount/>}/>}
        { user ?   <Route path='/post-ad' element={<PostAd/>}/>                           : <Route path='/post-add' element={<ErrorPage/>}/>}
        
        <Route path='*' element={<ErrorPage user={user} />}/>
      </Routes>
       

       <Footer/>
    </div>
  )
}

export default App