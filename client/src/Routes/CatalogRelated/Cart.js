import React, { useEffect, useState } from "react";
import { Data } from "../../Constants/Data";

import CartCard from "../../Components/CatalogCard/CartCard";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  let tax = 5;

  const handlePrice = () => {
    let all = 0;
    cart.map((item) => {
      all += item.price;
    });

    setPrice(all);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="cart-container">
      <h1>{Data.shoppingCartText.cartH1}</h1>

      <div className="d-flex justify-between gray">
        <div className="gap-10 d-flex mt-20">
          <span>Home</span>
          <span> > </span>
          <span>Shopping cart</span>
        </div>

        <span>
          {cart.length} {Data.shoppingCartText.items}
        </span>
      </div>
      <hr className="mt-20 gray" />

      {cart.length === 0 ? (
        <h1 className="cart-error">No items in your cart :(</h1>
      ) : (
        cart.map((item) => (
          <CartCard item={item} key={item.id} cart={cart} setCart={setCart} />
        ))
      )}

      <div className="cart-checkout d-flex justify-between align-center">
        <div className="promo-cart">
          <p className="gray">{Data.shoppingCartText.promo}</p>
          <div className="data-container-pos">
            <div className="register-container">
              <div className="input-container">
                <input type="email" required name="email" />
                <label>Promo Code</label>
              </div>
            </div>
            <button> Enter Code </button>
          </div>
        </div>
        <div className="total-money">
          <h3 className="gray">
            Subtotal <span className="gray">{price}$</span>
          </h3>
          <h3 className="gray">
            Tax <span className="gray">{tax}$</span>
          </h3>
          <h3>
            Total <span>{price + tax}$</span>
          </h3>
          <button>Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
