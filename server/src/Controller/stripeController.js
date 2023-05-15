const stripe = require("stripe")(
  "sk_test_51KzJRvLhGXhRc5xziYfVhu9LlDrbX6yeYYZBz4OFdsmCQyQKfCc9DP6EB57TXjS8gRQ7wZzpgVUARDNX0GdK5yew00iBp3szPc",
);

exports.getCfg = (req, res) => {


  res.json({
    publishableKey:
      "pk_test_51KzJRvLhGXhRc5xzHRFCntuJucU3o6dlgdy7NpZEWYIFmkGnxrnKMH1yjhgVBzK3hSQ5R5AtrxeuPjYsgLVa0Ds8007E3EjJ8F",
  });
};

exports.createPayment = async (req, res) => {

  const { price } = req.body

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: price.toFixed(0),
      automatic_payment_methods: {
        enabled: true,
      },  
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (e) {
    return res.status(400).json({
      errror: {
        message: e.message,
      },
    });
  }
};
