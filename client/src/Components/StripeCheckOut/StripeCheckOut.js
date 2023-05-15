import React, { useState } from "react";

import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

const StripeCheckOut = ({ setCart }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/complition`,
      },
    });

    if (error) {
      setMessage(error.message);
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={onSubmit} className="checkout-form">
      <PaymentElement />
      <button disabled={isProcessing} id="submit">
        <span className="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>

      {/* show any error, or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default StripeCheckOut;
