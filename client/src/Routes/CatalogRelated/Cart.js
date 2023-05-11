import React, { useEffect, useState } from "react";
import { Data } from "../../Constants/Data";

import CartCard from "../../Components/CatalogCard/CartCard";

import { AiOutlineRight } from 'react-icons/ai';


const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);


  const handlePrice = () => {
    let all = 0;
    
    cart.map((item) => {
      all += item.price * item.quantity
    });

    setPrice(all);
  };

  const handleChange = (item, d) => {
    let ind = -1
    cart.forEach((data, index) => {
      if(data._id === item._id){
        ind = index;
      }
    })

    const tempArr = cart;
    tempArr[ind].quantity += d; 
    if(tempArr[ind].quantity === 0){
      tempArr[ind].quantity = 1
    }

    setCart([...tempArr])
  };

  useEffect(() => {
    handlePrice();
  });


  let tax = 5;

  return (
    <div className="cart-container">
      <h1>{Data.shoppingCartText.cartH1}</h1>

      <div className="d-flex justify-between gray">
        <div className="gap-10 d-flex mt-20 aling-center">
          <span>Home</span>
          <span> <AiOutlineRight/> </span>
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
          <CartCard item={item} key={item._id} cart={cart} setCart={setCart}  handleChange={handleChange}/>
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
          <p className="gray">
            Subtotal <span className="gray">{price}$</span>
          </p>
          <p className="gray">
            Tax <span className="gray">{tax}$</span>
          </p>
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
