import React from "react";
import { Link } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";

import { Data } from "../../Constants/Data";

import CartCard from "../../Components/CatalogCard/CartCard";
import CheckOutButton from "../../Components/StripeCheckOut/CheckOutButton";

import { AiOutlineRight } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

const Cart = ({ cart, setCart, cartTotalAmount }) => {
  const [user] = useAuth();

  let tax = cartTotalAmount * 0.2;

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

  const clearCart = () => {
    if (
      window.confirm(
        "Are you sure you want to remove all your items from the cart?",
      )
    ) {
      setCart([]);
    }
  };

  return (
    <div className="cart-container">
      <h1>{Data.shoppingCartText.cartH1}</h1>

      <div className="d-flex justify-between gray">
        <div className="gap-10 d-flex mt-20 aling-center">
          <span>Home</span>
          <span>
            <AiOutlineRight />
          </span>
          <span>Shopping cart</span>
        </div>

        <span className="mt-20">
          {cart.length} {Data.shoppingCartText.items}
        </span>
      </div>

      <hr className="mt-20 gray" />

      <div className="cart-items-container">
        {cart.length === 0 ? (
          <div className="shopping-cart-error-container">
            <img src={Data.emptyCartError.img} />
            <h1 className="purple">{Data.emptyCartError.h1}</h1>
            <p className="gray">{Data.emptyCartError.p}</p>
            <Link to="/catalog">
              <button>{Data.emptyCartError.button}</button>
            </Link>
          </div>
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
        <div className="promo-cart">
          {/* <p className="gray">{Data.shoppingCartText.promo}</p> 
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
              )}  */}
          {cart.length === 0 ? (
            ""
          ) : (
            <button className="clear-cart-btn" onClick={clearCart}>
              <span>Clear cart</span>
            </button>
          )}
        </div>
        {cartTotalAmount == 0 ? (
          ""
        ) : (
          <div className="total-money">
            <p className="gray">
              Subtotal
              <span className="gray">{cartTotalAmount.toFixed(0)}$</span>
            </p>
            <strike className="gray d-flex justify-between">
              VAT <strike className="gray">{tax.toFixed(0)}$</strike>
            </strike>
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
              Subtotal <span>{Number(cartTotalAmount).toFixed(0)}$</span>
            </h3>
            {!user ? (
              <button>
                <Link to="/register">Register</Link>
              </button>
            ) : (
              <Link>
                <CheckOutButton cart={cart} />
              </Link>
            )}
            <Link
              className="d-flex align-center justify-center mt-20 gray continue-shopping"
              to="/catalog"
            >
              <BsArrowLeft className="icon" />
              <p>Continue Shopping</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
