import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";


//component
import Sidebar from "../Components/Sidebar/Sidebar";
import SidebarMobile from "../Components/Sidebar/SidebarMobile";

//hooks
import useFetch from "../Hooks/useFetch";
import useGetData from "../Hooks/useGetData";


const Dashboard = ({ user }) => {
  const { logOutUser } = useGetData();

  const [data, error] = useFetch(
    `http://localhost:5000/profile/${user._id}`,
    {},
  );
  

  return (
    <div className="dashboard-all-container">
      <div className="main-page-container">
        <div className="sidebar">
          <div className="sidebar-pc">
            <Sidebar user={user} />
          </div>
          <div className="sidebar-phone">
            <SidebarMobile user={user} />
          </div>
        </div>
        <div className="dashboard-data">
          <div className="dashboard-first-thing">
            <h1>
              Good Evening, <span className="purple"> {data?.username}</span>
            </h1>
            <button className="logout-button-mainpage" onClick={logOutUser}>
              Log out
            </button>
          </div>
        </div>
        <div className="dashboard-accessories"></div>
      </div>
    </div>
  );
};

export default Dashboard;
