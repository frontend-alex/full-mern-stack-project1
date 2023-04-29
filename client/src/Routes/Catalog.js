import React from "react";

import { BsPlay } from "react-icons/bs";

import CatalogCard from '../Components/CatalogCard/CatalogCard';


const Catalog = () => {
  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <h1>
          Premuim Shoes from From Manifacturer{" "}
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
      <CatalogCard/>
      <CatalogCard/>
      <CatalogCard/>
      <CatalogCard/>
  
      </div>
    </div>
  );
};

export default Catalog;
