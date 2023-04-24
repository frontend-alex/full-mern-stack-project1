const router = require('express').Router();
const authController = require('./Controller/authController');
const profileController = require('./Controller/profileController');

router.use('/', authController)
router.post('/edit', profileController.postEditProfile)
router.get('/profile/:userId', profileController.getProfile);

module.exports = router;
