import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Data } from "../../Constants/Data";

import { BsPlus } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import useAuth from "../../Hooks/useAuth";
import useFetch from "../../Hooks/useFetch";

const Navbar = ({ user, coutner }) => {
  const img =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png";

  // const location = useLocation();

  // const [active, setActive] = useState(false);

  // useEffect(() => {
  //   if (window.location.href == "http://localhost:3000/about") {
  //     setActive((prev) => !prev);
  //   }
  // }, [location.pathname]);

  const ref = useRef();

  window.onscroll = function () {
    OnScrol();
  };

  function OnScrol() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      ref.current.style.background = "white";
      ref.current.style.boxShadow = '0 20px 40px -14px rgba(0,0,0,0.25)'
      ref.current.style.zIndex= '4'
    } else {
      ref.current.style.background = "transparent";
      ref.current.style.boxShadow = 'none'
      ref.current.style.zIndex= '-1'
    }
  }

  return (
    <div className="navbar-container">
      <div className="navbar-pc" ref={ref}>
        <div className="box-1">
          <div className="navbar-logo">
            <img src={img} onClick={() => (window.location.href = "/")} />
          </div>
          <div className="navbar-links">
            {!user ? (
              Data.navbarLinks.map((link) => {
                const { id, name, path, icon, active } = link;

                return (
                  <li key={id}>
                    <Link to={path}>{name}</Link>
                  </li>
                );
              })
            ) : (
              <React.Fragment>
                {Data.navbarLinksLogged.map((link) => {
                  const { id, name, path, icon, active } = link;

                  return (
                    <li key={id}>
                      <Link to={path}>{name}</Link>
                    </li>
                  );
                })}
                <li>
                  <Link to={`/dashboard/${user.username}`}>Dashboard</Link>
                </li>
                <li>
                  <Link to={`/edit/${user._id}`}>Edit Profile</Link>
                </li>
              </React.Fragment>
            )}
          </div>
        </div>
        <div className="navbar-accessories">
          {user ? (
            <button
              className="button-login"
              onClick={() =>
                (window.location.href = `/dashboard/${user.username}`)
              }
            >
              Profile
            </button>
          ) : (
            <button
              className="button-login"
              onClick={() => (window.location.href = "/register")}
            >
              <BsPlus className="icon" />
              Create
            </button>
          )}
          <div className="navbar-cart">
            <Link to='/cart'>
              <div className="d-flex gap-10">
                <AiOutlineShoppingCart className="icon"/>
                <span>{coutner}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-mobile"></div>
    </div>
  );
};

export default Navbar;
