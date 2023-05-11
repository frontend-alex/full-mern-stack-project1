import React from "react";

import { Link } from "react-router-dom";

import { BsBagPlus } from "react-icons/bs";

const CatalogCard = ({ data, getItem}) => {
  const shortH1 = data.title.slice(0, 20) + "...";
  const shortDesc = data.description.slice(0, 100) + "...";

  const sale = data.price + 100;

  return (
    <div className="post postss">
      <div className="post-items" style={{height:"550px"}}>
        <Link to={`/catalog/${data._id}`}>
          <img src={data.imageUrl} className="catalog-card-image"/>

          <div className="card-text">
            <h2>{shortH1}</h2>
            <p>{shortDesc}</p>
          </div>
        </Link>

        
        <div className="post-text post-text-catalog">
          <p>Price:</p>
          <div className="catalog-price">
            <div className="price-sale">
              <span>{data.price}$</span>
              <span className="sale">
                <strike>{sale}$</strike>
              </span>
            </div>
            <button onClick={() => getItem(data)} className="catalog-add-to">
              <BsBagPlus className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
