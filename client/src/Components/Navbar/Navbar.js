import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Data } from "../../Constants/Data";

import { BsPlus } from "react-icons/bs";

import useAuth from "../../Hooks/useAuth";
import useFetch from "../../Hooks/useFetch";

const Navbar = ({ user }) => {
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

  // window.onscroll = function () {
  //   OnScrol();
  // };

  // function OnScrol() {
  //   if (
  //     document.body.scrollTop > 60 ||
  //     document.documentElement.scrollTop > 60
  //   ) {
  //     ref.current.style.background = "white";
  //     ref.current.style.boxShadow = '0 20px 40px -14px rgba(0,0,0,0.25)'
  //   } else {
  //     ref.current.style.background = "transparent";
  //     ref.current.style.boxShadow = 'none'
  //   }
  // }

  return (
    <div className="navbar-container">
      <div className="navbar-pc" ref={ref}>
        <div className="box-1">
          <div className="navbar-logo">
            <img src={img} onClick={() => (window.location.href = "/")} />
          </div>
          <div className="navbar-links">
            {!user
              ? Data.navbarLinks.map((link) => {
                  const { id, name, path, icon, active } = link;

                  return (
                    <li key={id}>
                      <Link to={path}>{name}</Link>
                    </li>
                  );
                })
              : Data.navbarLinksLogged.map((link) => {
                  const { id, name, path, icon, active } = link;

                  return (
                    <li key={id}>
                      <Link to={path}>{name}</Link>
                    </li>
                  );
                })}
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
        </div>
      </div>
      <div className="navbar-mobile"></div>
    </div>
  );
};

export default Navbar;
