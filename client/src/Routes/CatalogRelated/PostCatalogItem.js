import React, { useState } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import SidebarMobile from "../../Components/Sidebar/SidebarMobile";
import CatalogCard from "../../Components/CatalogCard/CatalogCard";

//hooks
import useAuth from "../../Hooks/useAuth";
import useGetData from "../../Hooks/useGetData";
import CatalogCardTemplate from "../../Components/CatalogCard/CatalogCardTemplate";

const PostCatalogItem = ({ user }) => {

  const { logOutUser } = useGetData();

  const [data, setData] = useState({
    image: "https://plainbackground.com/plain1024/abaaa5.png",
    header: "",
    text: "",
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setData((state) => ({ ...state, [name]: value }));
  };

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
            Good Evening, <span className="purple"> {user.username}</span>
          </h1>
          <button className="logout-button-mainpage" onClick={logOutUser}>
            Log out
          </button>
        </div>

        <div className="card-template mt-50">
          <h1>Post an Item to your <span className="purple">Catalog</span></h1>

          <div className="card-template-container">
            <CatalogCardTemplate image={data.image}/>
          </div>
        </div>
      </div>
      <div className="dashboard-accessories"></div>
    </div>
  </div>
  );
};

export default PostCatalogItem;
