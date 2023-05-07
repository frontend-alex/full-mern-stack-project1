import React from "react";

import { BsBagPlus }  from 'react-icons/bs';

const CatalogCard = ({data, getItem}) => {
  const shortH1 = data.title.slice(0, 20) + "...";
  const shortDesc = data.description.slice(0, 100) + "...";

  const sale = data.price + 100

  return (
    <div className="post">
      <div className="post-items">
        <img src={data.image} />
        <div className="post-text">
          <div>
            <h2>{shortH1}</h2>
            <p>{shortDesc}</p>
          </div>

          <p>Price:</p>
          <div className="catalog-price">
            <div className="price-sale">
              <span>{data.price} $</span>
              <span className="sale"> <strike>{sale} $</strike></span>
            </div>
            <button onClick={() => getItem(data)} className="catalog-add-to"><BsBagPlus className="icon"/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
