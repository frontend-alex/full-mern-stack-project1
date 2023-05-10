import React from "react";

import { Link } from "react-router-dom";

import { BsBagPlus } from "react-icons/bs";

const CatalogCardTemplate = ({ image, price, description, title }) => {

  // onClick={() => getItem(data)}

  const sale = price + 10.99
  return (
    <div className="template-cart-container">
      <div className="post">
        <div className="post-items">
          <a>
            <img src={image} />

            <div>
              <h2>{title}</h2>
              <p className="gray">{description}</p>
            </div>
          </a>

          <div className="post-text">
            <p>Price:</p>
            <div className="catalog-price">
              <div className="price-sale">
                <span>{price} $</span>
                <span className="sale">
                  {" "}
                  <strike>{Number(sale).toFixed(2)} $</strike>
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
