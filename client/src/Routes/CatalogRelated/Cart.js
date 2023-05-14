import React, { useEffect, useState } from "react";
import { Data } from "../../Constants/Data";

import CartCard from "../../Components/CatalogCard/CartCard";

import { AiOutlineRight } from "react-icons/ai";

const setPromoCodeStatus =
  JSON.parse(localStorage.getItem("promoCode")) || false;

const Cart = ({ cart, setCart }) => {
  const [products, SetProducts] = useState(cart);
  const [promo, setPromo] = useState("");

  let promoCode = "SWDZLPUETL";
  let tax = 5;
  let disabled = setPromoCodeStatus

  //---------cart amount price--------//
  const cartTotalAmount = products.reduce(
    (acc, data) => acc + data.price * data.quantity,
    0,
  );

  const [afterPromoPrice, setAfterPromoPrice] = useState(0);
  //---------cart amount price--------//

  //----------cart chaning price -----//

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data._id === item._id) {
        ind = index;
      }
    });

    const tempArr = cart;
    tempArr[ind].quantity += d;
    if (tempArr[ind].quantity === 0) {
      tempArr[ind].quantity = 1;
    }

    setCart([...tempArr]);
  };
  //----------cart chaning price -----//

  const onSubmit = (e) => {
    e.preventDefault();
    if (promo == promoCode) {
      setAfterPromoPrice((price) => price + 20);
      disabled = true;
      localStorage.setItem(
        "promoCode",
        JSON.stringify(disabled),
      );
      return;
    }
    console.log("invalid code");
  };

  return (
    <div className="cart-container">
      <h1>{Data.shoppingCartText.cartH1}</h1>

      <div className="d-flex justify-between gray">
        <div className="gap-10 d-flex mt-20 aling-center">
          <span>Home</span>
          <span>
            {" "}
            <AiOutlineRight />{" "}
          </span>
          <span>Shopping cart</span>
        </div>

        <span>
          {cart.length} {Data.shoppingCartText.items}
        </span>
      </div>
      <hr className="mt-20 gray" />

      {cart.length === 0 ? (
        <h1 className="cart-error">No items in your cart!</h1>
      ) : (
        cart.map((item) => (
          <CartCard
            item={item}
            key={item._id}
            cart={cart}
            setCart={setCart}
            handleChange={handleChange}
          />
        ))
      )}

      <div className="cart-checkout d-flex justify-between align-center">
        <div className="promo-cart">
          <p className="gray">{Data.shoppingCartText.promo}</p>
          <form onSubmit={onSubmit} className="data-container-pos">
            {disabled ? (
              ""
            ) : (
              <React.Fragment>
                <div className="register-container">
                  <div className="input-container">
                    <input
                      type="text"
                      required
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                    />
                    <label>Promo Code</label>
                  </div>
                </div>
                <button type="submit" disabled={disabled}>
                  Enter Code
                </button>
              </React.Fragment>
            )}
            {disabled ? (
              ""
            ) : (
              <p className="gray promo-hint">Hint: SWDZLPUETL</p>
            )}
          </form>
        </div>
        <div className="total-money">
          <p className="gray">
            Subtotal <span className="gray">{cartTotalAmount - afterPromoPrice}$</span>
          </p>
          <p className="gray">
            Tax <span className="gray">{tax}$</span>
          </p>
          {disabled ? (
            <p className="gray">
              Promo Code{" "}
              <span className="gray">
                <strike>20$</strike>
              </span>
            </p>
          ) : (
            ""
          )}
          <h3>
            Total <span>{(cartTotalAmount - afterPromoPrice)}$</span>
          </h3>
          <button>Check out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
