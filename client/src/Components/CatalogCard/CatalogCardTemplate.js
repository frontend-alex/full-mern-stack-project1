import React from "react";

import { Link } from "react-router-dom";

import { BsBagPlus } from "react-icons/bs";

const CatalogCardTemplate = ({ image }) => {
  // onClick={() => getItem(data)}

  return (
    <div className="template-cart-container">
      <div className="post">
        <div className="post-items">
          <Link to={`/catalog/`}>
            <img src={image} />

            <div>
              <h2>hello</h2>
              <p>ppp</p>
            </div>
          </Link>

          <div className="post-text">
            <p>Price:</p>
            <div className="catalog-price">
              <div className="price-sale">
                <span>5 $</span>
                <span className="sale">
                  {" "}
                  <strike>10 $</strike>
                </span>
              </div>
              <button className="catalog-add-to">
                <BsBagPlus className="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCardTemplate;
