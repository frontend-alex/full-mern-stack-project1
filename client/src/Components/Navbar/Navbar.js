import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Data } from "../../Constants/Data";

import { BsPlus } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineEdit } from "react-icons/ai";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";

import { RiShoppingCart2Line } from 'react-icons/ri'

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

  const toggle = () => {
    document.getElementById("sidebar").classList.toggle("active");
  };

  window.onscroll = function () {
    OnScrol();
  };

  function OnScrol() {
    if (
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
    ) {
      ref.current.style.background = "white";
      ref.current.style.boxShadow = "0 20px 40px -14px rgba(0,0,0,0.25)";
      ref.current.style.zIndex = "4";
    } else {
      ref.current.style.background = "transparent";
      ref.current.style.boxShadow = "none";
      ref.current.style.zIndex = "-1";
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
            <Link to="/cart">
              <div className="d-flex gap-10">
                <AiOutlineShoppingCart className="icon" />
                <span>{coutner}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* mobile navbar */}

      <div className="navbar-mobile">
        <div className="d-flex justify-between aling-center mobile-non-nav">
          <div className="mobile-navbar-logo">
            <div className="mobile-navbar-cart ">
              <Link to="/cart">
                <div className="d-flex gap-10">
                  <AiOutlineShoppingCart className="icon2" />
                  <span>{coutner}</span>
                </div>
              </Link>
            </div>
          </div>
          <HiOutlineBars3BottomRight className="icon" onClick={toggle} />
        </div>
        <div id="sidebar" className="navbar-mobile-container">
          <div className="mobile-navbar-logo" style={{ padding: "20px" }}>
            <img src={img} onClick={() => (window.location.href = "/")} />
          </div>

          <hr style={{ margin: "10px 20px" }} />
          <div className="mobile-navbar-links">
            {!user ? (
              Data.navbarLinks.map((link) => {
                const { id, name, path, icon, active } = link;

                return (
                  <li key={id}>
                    <i className="icon">{icon}</i>
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
                      <i className="icon">{icon}</i>
                      <Link to={path}>{name}</Link>
                    </li>
                  );
                })}
                <li>
                  <RxDashboard className="icon" />
                  <Link to={`/dashboard/${user.username}`}>Dashboard</Link>
                </li>
                <li>
                  <AiOutlineEdit className="icon" />
                  <Link to={`/edit/${user._id}`}>Edit Profile</Link>
                </li>
              </React.Fragment>
            )}
          </div>

          <hr style={{ margin: "10px 20px" }} />

          <div className="button-navbar-mobile-container">
            {!user ? (
              <button
                className="button-navbar-mobile"
                onClick={() => (window.location.href = "/register")}
              >
                Create An Account
              </button>
            ) : (
              ""
            )}
          </div>

          <div className="mobile-navbar-cart ">
            <Link to="/cart">
              <div className="d-flex gap-10">
                <AiOutlineShoppingCart className="icon" />
                <span>{coutner}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
