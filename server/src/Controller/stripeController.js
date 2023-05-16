const stripe = require("stripe")(
  "sk_test_51KzJRvLhGXhRc5xziYfVhu9LlDrbX6yeYYZBz4OFdsmCQyQKfCc9DP6EB57TXjS8gRQ7wZzpgVUARDNX0GdK5yew00iBp3szPc",
);


exports.createPaymentSession = async (req, res) => {

  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
    },
  });

  const line_items = req.body.itemData.map((item) => {
    
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.imageUrl],
          description: item.description,
          metadata: {
            id: item._id,
          },
        },
        unit_amount: item.price  * 100,
      },
      quantity: item.quantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "KE", "BG"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "usd",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "usd",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    line_items,
    mode: "payment",
    customer: customer._id,
    success_url: `http://localhost:3000/complition`,
    cancel_url: `http://localhost:3000/cart`,
  });

  res.json({ url: session.url });

};
