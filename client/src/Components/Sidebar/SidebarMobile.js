import React from "react";

import { Link } from "react-router-dom";

import { Data } from "../../Constants/Data";

import { AiOutlinePlus, AiOutlineEdit } from "react-icons/ai";

const SidebarMobile = ({ user }) => {
  return (
    <div className="sidebar-mobile-container">
      <div className="sidebar-link">
        {!user.isAdmin ? (
          <React.Fragment>
            {Data.sidebarLinksAdmin.map((link) => {
              const { id, path, name, icons } = link;
              return (
                <Link to={path} key={id}>
                  <i className="icon">{icons}</i>
                  <li>{name}</li>
                </Link>
              );
            })}
            <Link to={`/edit/${user._id}`}>
              <AiOutlineEdit  className="icon"/>
              <li>Edit Profile</li>
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {Data.sidebarLinks.map((link) => {
              const { id, path, name, icons } = link;

              return (
                <Link to={path} key={id}>
                  <i className="icon">{icons}</i>
                  <li>{name}</li>
                </Link>
              );
            })}
            <Link to={`/edit/${user._id}`}>
              <AiOutlineEdit className="icon"/>
              <li>Edit Profile</li>
            </Link>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default SidebarMobile;
