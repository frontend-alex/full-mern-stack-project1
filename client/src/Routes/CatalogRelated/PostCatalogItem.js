import React, { useEffect, useState } from "react";

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
    imageUrl: "https://plainbackground.com/plain1024/abaaa5.png",
    title: "Mens Casual Slim Fit",
    description: "our perfect pack for everyday use and walks",
    price: 50.99,
  });

  useEffect(() => {
    if (data.imageUrl == "") {
      setData(
        data.imageUrl == "https://plainbackground.com/plain1024/abaaa5.png",
      );
    }
  }, [data.imageUrl]);

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

          <hr className="mt-50 gray" />

          <div className="card-template mt-50">
            <h1>
              Post an Item to your <span className="purple">Catalog</span>
            </h1>

            <div className="card-template-container">
              <div className="d-none">
                <CatalogCardTemplate
                  image={data.imageUrl}
                  price={data.price}
                  title={data.title}
                  description={data.description}
                />
              </div>
              <CatalogCardTemplate
                image={data.imageUrl}
                price={data.price}
                title={data.title}
                description={data.description}
              />
              <div className="d-none">
                <CatalogCardTemplate
                  image={data.imageUrl}
                  price={data.price}
                  title={data.title}
                  description={data.description}
                />
              </div>
            </div>
          </div>

          {/* <div className="d-flex justify-center aling-center">
            <form className="mt-50">
              <h1>Add data</h1>
              <div className="data-container-pos">
                <div className="register-container">
                  <div className="input-container">
                    <input
                      type="email"
                      required
                      name="imageUrl"
                      onChange={changeHandler}
                    />
                    <label>Image url</label>
                  </div>
                </div>
              </div>

              <div className="data-container-pos">
                <div className="register-container">
                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="title"
                      onChange={changeHandler}
                    />
                    <label>Title</label>
                  </div>
                </div>
              </div>

              <div className="data-container-pos">
                <div className="register-container">
                  <div className="input-container">
                    <input
                      type="text"
                      required
                      name="description"
                      onChange={changeHandler}
                    />
                    <label>Description</label>
                  </div>
                </div>
              </div>

              <div className="data-container-pos">
                <div className="register-container">
                  <div className="input-container">
                    <input
                      type="number"
                      required
                      name="price"
                      onChange={changeHandler}
                    />
                    <label>Price</label>
                  </div>
                </div>
              </div>
            </form>
          </div> */}
        </div>
        <div className="dashboard-accessories"></div>
      </div>
    </div>
  );
};

export default PostCatalogItem;
