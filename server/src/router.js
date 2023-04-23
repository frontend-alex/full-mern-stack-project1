const router = require('express').Router();
const authController = require('./Controller/authController');

router.use('/', authController)

module.exports = router;
