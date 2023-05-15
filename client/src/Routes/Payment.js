import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import StripeCheckOut from "../Components/StripeCheckOut/StripeCheckOut";

const Payment = ({ cartTotalAmount }) => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  const tax = cartTotalAmount * 0.2
  const taxedPrice = cartTotalAmount + tax
  
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  };

  useEffect(() => {
    fetch("http://localhost:5000/config").then(async (r) => {
      const { publishableKey } = await r.json();

      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
     fetch("http://localhost:5000/create-payment", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ price : Number(taxedPrice.toFixed(0))}),
    }).then(async (r) => {
      const { clientSecret } = await r.json();
      setClientSecret(clientSecret);
      
    })
  }, []);

  return (
    <div className='stripe-checkout'>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <h1>Pay now with Stripe :)</h1>
            <h3 className="gray">Total amount: {taxedPrice.toFixed(0)}$</h3>
          <StripeCheckOut/>
        </Elements>
      )}
    </div>
  );
};

export default Payment;
