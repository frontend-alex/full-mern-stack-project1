const router = require('express').Router();
const authController = require('./Controller/authController');
const profileController = require('./Controller/profileController');
const catalogController = require('./Controller/catalogController');
const stripeController = require('./Controller/stripeController');

router.use('/', authController)
router.post('/edit', profileController.postEditProfile)
router.get('/profile/:userId', profileController.getProfile);

router.get('/catalog', catalogController.getAllCatalog);
router.get('/catalog/:productId', catalogController.getCatalogItem);
router.post('/post-catalog-item', catalogController.postCatalogItem);


//STRIPE API
router.get('/config', stripeController.getCfg)
router.post('/create-payment', stripeController.createPayment);

module.exports = router;
