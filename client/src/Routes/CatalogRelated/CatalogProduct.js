import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import ErrorToast from "../../Constants/ToastMessages/ErrorToast";

import useFetch from "../../Hooks/useFetch";

const CatalogProduct = ({ cart, setCart }) => {
  const { productId } = useParams();

  const [data, error] = useFetch(`http://localhost:5000/catalog/${productId}`);

  const [toggleDesc, setToggleDesc] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [added, setAdded] = useState(false);
  // const catalogRoute = window.location.pathname.split('/')[1];
  const itemId = window.location.pathname.split("/")[2];

  if (data == undefined) {
    return;
  }

  const { imageUrl, title, description, price, _id } = data;

  let smallerDescription;

  if (description.length > 200) {
    smallerDescription = description.slice(0, 200) + " ...";
  }


  const getItem = (item) => {
    setAdded(false)
    let added = false;

    cart?.forEach((product) => {
      if (item._id == product._id) {
        added = true;
      }
    });

    if (added) {
      setErrorToast(true);
      setAdded(true)

      setTimeout(() => {
        setErrorToast(false);
      }, 1000);

      return;
    }
    setCart([...cart, item]);
  };


  return (
    <div className="catalogProductInfo-container">
       {errorToast && (
        <ErrorToast text="Item already in your cart!" duration={100} />
      )}

      <div className="route">
        <p className="gray">
          <Link to='/catalog'>Catalog</Link> / <span>{itemId}</span>
        </p>
      </div>
      <div className="catalogProductInfo-flex">
        <div className="product-image">
          <img src={imageUrl} />
        </div>
        <div className="product-data">
          <h1>{title}</h1>
          <hr className="gray mt-10 mb-20" />


          {toggleDesc ? (
            <React.Fragment>
              <p className="gray">{description}</p>
              <a className="toggle-desc-link red" onClick={() => setToggleDesc(prev => !prev)}>Close</a>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className="gray">{smallerDescription}</p>
              <a  className="toggle-desc-link purple" onClick={() => setToggleDesc(prev => !prev)}>Learn more</a>
            </React.Fragment>
          )}

          <div className="d-flex aling-center mt-20 price-action gap-10">
            <span>{price.toFixed(2)}$</span>
            <strike> {Number(price + 50).toFixed(2)}$</strike>
          </div>

          <button className="add-to-cart-btn" onClick={() => getItem(data)}>
            <span>
              {added ? 'Items already in your cart!' : 'Add to cart'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogProduct;
