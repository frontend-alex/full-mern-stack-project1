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
      <div className="cart-card">
        <img src={imageUrl} />

        <div className="card-text">
          <h2>{shortH1}</h2>
          <p className="gray">{shortDesc}</p>
          <span className="button-pos-pc">{price} $</span>

          <div className="buttons-pos-mobile">
            <div className="d-flex justify-cetner aling-center gap-20 buttons-pos-pc">
              <span>{price} $</span>
              <div className="d-flex quantity-container gap-20 aling-center">
                <button onClick={() => handleChange(item, -1)}>-</button>
                <span style={{fontSize:'16px'}}>{item.quantity}</span>
                <button onClick={() => handleChange(item, +1)}>+</button>
              </div>

              <BsFillTrashFill
                className="icon"
                onClick={() => filterCart(_id)}
              />
            </div>
          </div>
        </div>

        <div className="button-pos-pc">
          <div className="d-flex justify-cetner aling-center gap-20">
            <div className="d-flex quantity-container gap-20 aling-center">
              <button onClick={() => handleChange(item, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleChange(item, +1)}>+</button>
            </div>

            <BsFillTrashFill className="icon" onClick={() => filterCart(_id)} />
          </div>
        </div>
      </div>

      <hr className="mb-20 mt-20" />
    </div>
  );
};

export default CartCard;
