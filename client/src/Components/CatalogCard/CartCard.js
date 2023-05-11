import React from "react";

import { BsFillTrashFill } from "react-icons/bs";

const CartCard = ({ item, cart, setCart, handleChange }) => {
  const { description, price, title, imageUrl, _id } = item;

  const shortH1 = title?.slice(0, 30) + "...";
  const shortDesc = description?.slice(0, 50) + "...";

  const filterCart = (id) => {
    const filteredCart = cart.filter((c) => c._id !== id);
    setCart(filteredCart);
  };

  return (
    <div className="cart-inner">
      <div className="d-flex justify-between  cart-card aling-center">
        <img src={imageUrl} />

        <div className="card-text">
          <h2>{shortH1}</h2>
          <p className="gray">{shortDesc}</p>
          <span>{price} $</span>
        </div>

        <div className="d-flex quantity-container gap-20 aling-center">
          <button onClick={() => handleChange(item, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleChange(item, +1)}>+</button>
        </div>

        <BsFillTrashFill className="icon" onClick={() => filterCart(_id)} />
      </div>

      <hr className="mt-20" />
    </div>
  );
};

export default CartCard;
