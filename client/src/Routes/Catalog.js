import React from "react";

import { BsPlay } from "react-icons/bs";

const Catalog = () => {
  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <h1>
          Premuim Shoes from From Manifacturer B. Brand at reasonable prices
        </h1>
        <div className="box-2">
          <div className="header-circle">
            <BsPlay className="icon" />
            <p>Watch a company presentation</p>
          </div>
        </div>
      </div>

      <div className="catalog-sorting-conainter">
        <div className="box-1"></div>
        <div className="box-2"></div>
        <div className="box-3"></div>
      </div>
    </div>
  );
};

export default Catalog;
