const Express = require('express');

// const {check, body} = require('express-validator/check');

const router = Express.Router();

const auth = require('../../controller/user/auth/authController');

// const is_auth = require('../../../middleware/auth/_isAuth');

router.post('/login', auth.loginController);

router.post( '/signup', auth.signupController);

router.get('/logout', auth.logoutController);

module.exports = router;