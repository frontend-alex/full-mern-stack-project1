import React, { useState, useEffect} from "react";

import { BsPlay } from "react-icons/bs";

import CatalogCard from "../Components/CatalogCard/CatalogCard";
import useFetch from "../Hooks/useFetch";

const Catalog = () => {
  const [data, error] = useFetch("https://fakestoreapi.com/products");

  const [cart, setCart] = useState([]);

  const getItem = (item) => {
    setCart([...cart, item])
  };


  // useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // }, [cart]);

 

  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <h1>
          Premuim Shoes from From Manifacturer
          <span className="purple">B. Brand</span> at reasonable prices
        </h1>
        <div className="box-2">
          <div className="header-circle">
            <BsPlay className="icon" />
            <p>Watch a company presentation</p>
          </div>
        </div>
      </div>

      <div className="catalog-sorting-conainter">
        <div className="box-1">
          <input required placeholder="200$-500$" />
          <label>Price:</label>
        </div>
        <div className="box-2">
          <input required placeholder="Chairs" />
          <label>Category:</label>
        </div>
        <div className="box-3">
          <input required placeholder="Purple" />
          <label>Color:</label>
        </div>
      </div>

      <div className="catalog-post-container">
        {data?.map((data) => (
          <CatalogCard
            key={data.id}
            getItem={getItem}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
