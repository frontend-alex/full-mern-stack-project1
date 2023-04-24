const router = require("express").Router();

// const User = require('../Schemas/User');
const authService = require("../Services/authService");
const jwt = require("../utils/jsonwebtoken");

router.post("/register", async (req, res) => {

  const userPfp = ""
  const bio = ""

  const { email, password, username, rePassword } = req.body;

  const existingUsername = await authService.getUsername(username);

  if (existingUsername) {
    return res
      .status(404)
      .json({ status: 404, message: `Username already in use!` });
  }

  const exisitngUserEmail = await authService.getUser(email);

  if (exisitngUserEmail) {
    return res
      .status(404)
      .json({ status: 404, message: `Email already in use!` });
  }

  if (password != rePassword) {
    return res
      .status(404)
      .json({ status: 404, message: `Passwords don't match ` });
  }

  try {
    const user = await authService.register(username, email, password, userPfp, bio);
    res.status(201).json({ status: 201, user });
  } catch (err) {
    const errors = Object.keys(err.errors).map(
      (keys) => err.errors[keys].message,
    );
    return res.status(404).json({ status: 404, error: errors });
  }
});

router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  try{
    const token = await authService.login(email, password);
    res.status(201).json({ status: 201, token })

  } catch(err) {
    res.status(404).json({ status : 404, message: err.message})
  }
    
});


router.get('/login', async (req, res) => {
  const token = req.headers['auth'];

  await jwt.verify(token, "0823r5bsdfdgkljb89y234biojadnfg")
    .then(info => res.json(info))
    .catch(err => res.json(err));
})




module.exports = router;
