import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Data } from "../../Constants/Data";

import { BsPlus } from "react-icons/bs";

import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const img =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png";

  // const location = useLocation();

  // const [active, setActive] = useState(false);

  // useEffect(() => {
  //   if (window.location.href == "http://localhost:3000/about") {
  //     setActive((prev) => !prev);
  //   }
  // }, [location.pathname]);

  const [user] = useAuth();

  return (
    <div className="navbar-container">
      <div className="navbar-pc">
        <div className="box-1">
          <div className="navbar-logo">
            <img src={img} />
          </div>
          <div className="navbar-links">
            {Data.navbarLinks.map((link, i, row) => {
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
              onClick={() => (window.location.href = "/main")}
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
