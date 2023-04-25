import React, { useState } from "react";
import { Link } from "react-router-dom";

import useFetch from "../../Hooks/useFetch";

import { Data } from "../../Constants/Data";

import { AiOutlinePlus } from "react-icons/ai";
import { FiSettings } from 'react-icons/fi';

import userImg from '../../assests/images/user.png'

const Sidebar = ({ user }) => {

  const img =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png";

    const [ data, error ] = useFetch(`http://localhost:5000/profile/${user._id}`, {})

    const { username, bio, userPfp } = data;

  const [smallSide, setSmallSide] = useState(false);


  return (
    <div
      className={
        smallSide ? "sidebar-container small-sidebar" : "sidebar-container"
      }
    >
      <div className="sidebar-logo">
        <img src={img} />
      </div>
      <div className="sidebar-links">
        {Data.sidebarLinks.map((link) => {
          const { id, name, path, icons } = link;

          return (
            <li key={id} className="li">
              <i className={smallSide ? "icon icon-small" : "icon"}>{icons}</i>
              <Link className={smallSide ? "a none" : "a"} to={`${path}/${user._id}`}>
                {name}
              </Link>
            </li>
          );
        })}
      </div>
      <div className="sidebar-account-data">
        <div className={smallSide ? "account-image left-10" : "account-image"}>
          { !userPfp ? <img src={userImg} /> : <img className="mad-pic" src={userPfp} /> }

          <div className="add-image">
            <AiOutlinePlus className="icon" />
          </div>
        </div>
        <div className={smallSide ? "account-data none" : "account-data"}>
          <h3>{username}</h3>
          <p>{user.email}</p>
        </div>
      </div>

      <div className={smallSide ? "sidebar-settings padding-10" : "sidebar-settings"}>
        <FiSettings className="icon" onClick={( ) => setSmallSide(prev => !prev)}/>
        <p className={smallSide ? "h1-none" : ""}>Change sidebar width</p>
      </div>
    </div>
  );
};

export default Sidebar;
