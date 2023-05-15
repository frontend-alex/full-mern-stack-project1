import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Data } from "../../Constants/Data";
import CartCard from "../../Components/CatalogCard/CartCard";

import { AiOutlineRight } from "react-icons/ai";

const setPromoCodeStatus =
  JSON.parse(localStorage.getItem("promoCode")) || false;

const Cart = ({ cart, setCart, cartTotalAmount }) => {
  //---------cart amount price--------//

  const [afterPromoPrice, setAfterPromoPrice] = useState(0);

  let tax = cartTotalAmount * 0.2;

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

      <div className="cart-items-container">
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
      </div>

      <div className="cart-checkout d-flex justify-between align-center">
        {/* <div className="promo-cart">
            <p className="gray">{Data.shoppingCartText.promo}</p> 
              {promoUsed ? (
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
                  <div className="promocode-pos">
                  <button type="submit">
                    Enter Code
                  </button>
                    {promoUsed ? (
                      ""
                    ) : (
                      <p className="gray promo-hint">Hint: SWDZLPUETL</p>
                    )}
                  </div>
                </React.Fragment>
              )} 
          </div> */}
        {cartTotalAmount == 0 ? (
          ""
        ) : (
          <div className="total-money">
            <p className="gray">
              Subtotal{" "}
              <span className="gray">{cartTotalAmount.toFixed(0)}$</span>
            </p>
            <p className="gray">
              VAT <span className="gray">{tax.toFixed(0)}$</span>
            </p>
            {/* {promoUsed ? (
            <p className="gray">
              Promo Code{" "}
              <span className="gray">
                <strike>20$</strike>
              </span>
            </p>
          ) : (
            ""
          )} */}
            <h3>
              Total <span>{Number(tax + cartTotalAmount).toFixed(0)}$</span>
            </h3>
            <button><Link to='/payment'>Check out</Link></button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
