import React, { useState } from "react";

import { Link } from "react-router-dom";

import { BsBagPlus } from "react-icons/bs";

const CatalogCardTemplate = ({
  image,
  price,
  description,
  title,
  onchangeHandler,
  showBtn,
  onSubmit,
}) => {
  const sale = price + Number(10);

  return (
    <form onSubmit={onSubmit} className="template-cart-container">
      <div className="post">
        <div className="post-items">
          <a>
            <img
              src={image}
              className="dashboard-template-image"
            />
            <div>
              <input
                type="url"
                placeholder="Image url"
                name="imageUrl"
                onChange={onchangeHandler}
                // onChange={(event) => {
                //   setSelectedImage(event.target.files[0]);
                // }}
              />

              <input
                onChange={onchangeHandler}
                className="input-title"
                name="title"
                placeholder={title}
              />
              <textarea
                onChange={onchangeHandler}
                className="gray textarea-desc"
                name="description"
                placeholder={description}
              />
            </div>
          </a>

          <div className="post-text">
            <p>Price:</p>
            <div className="catalog-price">
              <div className="price-sale">
                <input
                  onChange={onchangeHandler}
                  className="input-sale"
                  name="price"
                  placeholder={`${price} $`}
                  type="number"
                />
                <span className="sale">
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
      {showBtn && (
        <button className="card-template-button mt-20">Create a card</button>
      )}
    </form>
  );
};

export default CatalogCardTemplate;
