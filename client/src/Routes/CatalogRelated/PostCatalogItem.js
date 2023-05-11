import React, { useEffect, useState } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import SidebarMobile from "../../Components/Sidebar/SidebarMobile";
import CatalogCard from "../../Components/CatalogCard/CatalogCard";

//hooks
import useAuth from "../../Hooks/useAuth";
import useGetData from "../../Hooks/useGetData";
import CatalogCardTemplate from "../../Components/CatalogCard/CatalogCardTemplate";

const PostCatalogItem = ({ user }) => {
  const { logOutUser, postCatalogItem } = useGetData();

  // const [selectedImage, setSelectedImage] = useState(null);

  const [data, setData] = useState({
    imageUrl: "https://plainbackground.com/plain1024/abaaa5.png",
    title: "Mens Casual Slim Fit",
    description: "our perfect pack for everyday use and walks",
    price: 50.99,
  });

  // useEffect(() => {
  //   if(data.imageUrl != 'https://plainbackground.com/plain1024/abaaa5.png'){
  //     setData(
  //       data.imageUrl == selectedImage,
  //     );
  //   }
  // }, [data.imageUrl]);

  const changeHandler = (e) => {
    const { value, name } = e.target;
    setData((state) => ({ ...state, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault()
   
    if(window.confirm('Are you sure you want to create a new item in your catalog?')){
      postCatalogItem(data.imageUrl, data.title, data.description, data.price, { owner : user.username })
        .then(() => {
          window.location.href = '/catalog'
        })
    }
  }


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
                  onchangeHandler={changeHandler}
                  // setSelectedImage={setSelectedImage}
                  // selectedImage={selectedImage}
                  onSubmit={onSubmit}

                  showBtn={false}

                  image="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                  price={19.99}
                  title="White Gold Plated Princess"
                  description="Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her."
                />
              </div>
              <CatalogCardTemplate
                // selectedImage={selectedImage}
                // setSelectedImage={setSelectedImage}
                onchangeHandler={changeHandler}
                onSubmit={onSubmit}

                showBtn={true}

                image={data.imageUrl}
                price={data.price}
                title={data.title}
                description={data.description}
              />
              <div className="d-none">
                <CatalogCardTemplate
                  // selectedImage={selectedImage}
                  // setSelectedImage={setSelectedImage}
                  onchangeHandler={changeHandler}
                  onSubmit={onSubmit}

                  showBtn={false}
                  
                  image="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
                  price={40.55}
                  title="Pierced Owl Rose Gold Plated Stainless Steel Double"
                  description="Rose Gold Plated Double Flared Tunnel Plug Earrings."
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-accessories"></div>
      </div>
    </div>
  );
};

export default PostCatalogItem;
