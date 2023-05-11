const router = require('express').Router();
const authController = require('./Controller/authController');
const profileController = require('./Controller/profileController');
const catalogController = require('./Controller/catalogController');

router.use('/', authController)
router.post('/edit', profileController.postEditProfile)
router.get('/profile/:userId', profileController.getProfile);

router.get('/catalog-items', catalogController.getAllCatalog);
router.post('/post-catalog-item', catalogController.postCatalogItem);

module.exports = router;
