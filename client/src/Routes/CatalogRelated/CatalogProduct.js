import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

import ErrorToast from "../../Constants/ToastMessages/ErrorToast";

import useFetch from "../../Hooks/useFetch";

import { AiFillHeart } from "react-icons/ai";

const CatalogProduct = ({ cart, setCart }) => {

  let inStock = true;

  const { productId } = useParams();

  const [data, error] = useFetch(`http://localhost:5000/catalog/${productId}`);

  const [toggleDesc, setToggleDesc] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [added, setAdded] = useState(false);

  if (data == undefined) {
    return;
  }

  const { imageUrl, title, description, price, _id } = data;

  let smallerDescription;

  if (description.length > 200) {
    smallerDescription = description.slice(0, 200) + " ...";
  }

  const getItem = (item) => {
    setAdded(false);
    let added = false;

    cart?.forEach((product) => {
      if (item._id == product._id) {
        added = true;
      }
    });

    if (added) {
      setErrorToast(true);
      setAdded(true);

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
          <Link to="/catalog">Catalog</Link> / <span>{title}</span>
        </p>
      </div>
      <div className="catalogProductInfo-flex">
        <div className="product-image">
          <div className="small-images">
            <img src={imageUrl}/>
            <img src={imageUrl}/>
            <img src={imageUrl}/>
          </div>
          <img src={imageUrl} className='main-img'/>
        </div>
        <div className="product-data">
          <h1>{title}</h1>

          <div className="d-flex aling-center mt-10 mb-20 price-action gap-10">
            <span>{price.toFixed(2)} USD</span>
            <strike> {Number(price + 50).toFixed(2)} USD</strike>
          </div>

          <span className={`stock-btn ${inStock ? "yes" : "nope" }`}>{inStock ? "In Stock" : "Out of Stock"}</span>

          <button disabled={!inStock} className="add-to-cart-btn" onClick={() => getItem(data)}>
            <span>{ inStock ? (added ? "Items already in your cart!" : "Add to cart") : "Out of Stock"}</span>
          </button>

          <div className="additional-text">
            <p className="p-1">Concerned about size?</p>
            <p className="gray">
              With every order you get the right to review and test before
              payment.
            </p>
          </div>

          <div className="product-sizing-data">
            <p>
              Color: <span>Black</span>
            </p>
            <p>
              Size: <span>M</span>
            </p>
            <p>
              Condition: <span>New</span>
            </p>
          </div>
        </div>
      </div>
      <div className="additional-data-container-card-catalog-id">
        <div className="favorites d-flex mb-50 aling-center">
          <AiFillHeart className="icon" />
          <p>Favorites</p>
        </div>

        <h1>Description</h1>

        <hr className="gray mt-10 custom-line-width" />


        <div className="item-description">
          {toggleDesc ? (
            <React.Fragment>
              <p className="gray">{description}</p>
              <a
                className="toggle-desc-link red"
                onClick={() => setToggleDesc((prev) => !prev)}
              >
                Close
              </a>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <p className="gray">{smallerDescription}</p>
              <a
                className="toggle-desc-link purple"
                onClick={() => setToggleDesc((prev) => !prev)}
              >
                Learn more
              </a>
            </React.Fragment>
          )}
        </div>



        <hr className="gray mt-20 mb-20" />

      </div>
    </div>
  );
};

export default CatalogProduct;
