import React, { useState } from 'react'
import Login from '../Components/Register/Login';
import Register from '../Components/Register/Register';

const MakeAccount = ({ user }) => {

    const [ toggle, setToggle ] = useState(user == '' ? true : false);

  return (
    <div className='make-account-container'>
        {!toggle ? <Register setToggle={setToggle} /> : <Login setToggle={setToggle} />}
    </div>
  )
}

export default MakeAccount