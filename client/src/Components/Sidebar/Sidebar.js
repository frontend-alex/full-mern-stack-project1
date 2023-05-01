import React, { useState } from "react";
import { Link } from "react-router-dom";

import useFetch from "../../Hooks/useFetch";

import { Data } from "../../Constants/Data";

import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";

import { FiSettings } from "react-icons/fi";

import userImg from "../../assests/images/user.png";

const Sidebar = ({ user }) => {
  const img =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png";

  const [data, error] = useFetch(
    `http://localhost:5000/profile/${user._id}`,
    {},
  );

  const [smallSide, setSmallSide] = useState(true);

  return (
    <div
      className={
        smallSide ? "sidebar-container small-sidebar" : "sidebar-container"
      }
    >
      <div className="sidebar-logo">
        <img src={img} onClick={() => (window.location.href = "/")} />
      </div>
      <div className="sidebar-links">
        {!data.isAdmin ? (
          <div>
            {Data.sidebarLinks.map((link) => {
              const { id, name, path, icons } = link;

              return (
                <Link key={id} className="li">
                  <i className={smallSide ? "icon icon-small" : "icon"}>
                    {icons}
                  </i>
                  <li className={smallSide ? "a none" : "a"} to={path}>
                    {name}
                  </li>
                </Link>
              );
            })}
            <li className="li">
              <i className={smallSide ? "icon icon-small" : "icon"}>
                <AiOutlineEdit />
              </i>
              <Link
                className={smallSide ? "a none" : "a"}
                to={`/edit/${data?._id}`}
              >
                Edit Profile
              </Link>
            </li>
          </div>
        ) : (
          <div>
            {Data.sidebarLinksAdmin.map((link) => {
              const { id, name, path, icons } = link;

              return (
                <li key={id} className="li">
                  <i className={smallSide ? "icon icon-small" : "icon"}>
                    {icons}
                  </i>
                  <Link className={smallSide ? "a none" : "a"} to={path}>
                    {name}
                  </Link>
                </li>
              );
            })}
            <li className="li">
              <i className={smallSide ? "icon icon-small" : "icon"}>
                <AiOutlineEdit />
              </i>
              <Link
                className={smallSide ? "a none" : "a"}
                to={`/edit/${data?._id}`}
              >
                Edit Profile
              </Link>
            </li>
          </div>
        )}
      </div>

      <div className="sidebar-data-relative">
        <div className="sidebar-account-data">
          <div
            className={smallSide ? "account-image left-10" : "account-image"}
          >
            {!data?.userPfp ? (
              <img src={userImg} />
            ) : (
              <img className="mad-pic" src={data?.userPfp} />
            )}

            <div className="add-image">
              <AiOutlinePlus className="icon" />
            </div>
          </div>
          <div className={smallSide ? "account-data none" : "account-data"}>
            <h3>{data?.username}</h3>
            <p>{data?.email}</p>
          </div>
        </div>

        <div
          className={
            smallSide ? "sidebar-settings padding-10" : "sidebar-settings"
          }
        >
          <FiSettings
            className="icon"
            onClick={() => setSmallSide((prev) => !prev)}
          />
          <p className={smallSide ? "h1-none" : ""}>Change sidebar width</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
