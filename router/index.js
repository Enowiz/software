const express = require('express');

const router = express.Router();

const auth = require('../middleware/_isAuth');

const contact = require('../controller/contact/contactController');

const authRouter = require('./auth/authRouter');

const authController = require('../controller/auth/authController');

const homeController = require('../controller/home/homeController');

const profileController = require('../controller/profile/profileController');

const contactController = require('../controller/contact/contactController');

// router.get('/', isAuthenticated, (req, res) => {
//     res.render('pages/dashboard');
// });

router
  .get('/profile', auth, profileController.getProfile)
  .put('/edit-mail', auth,  profileController.editMail)
  .put('/edit-name', auth, profileController.editName)
  .put('/edit-quote', auth, profileController.editQuote)

router
  .get('/contact', auth, contactController.getContact)
  .post('/add-query', auth, contactController.addQuery)

router
  .get('/login', authController.getLogin)
  .get('/register', authController.getRegister)
  .post('/login', authController.loginController)
  .post('/signup', authController.signupController)
  .get('/logout', authController.logoutController);


router
  .get('/maps',  homeController.getMaps)
  .get('/', homeController.getHome);

// router.get('/', (req, res) => {
//     res.render('pages/dashboard');
//   });

//   router.get('/icons', auth, (req, res) => {
//     res.render('pages/icons');
//   });
  
//   router.get('/maps', auth, (req, res) => {
//     res.render('pages/maps');
//   });
  
//   router.get('/login', (req, res) => {
//     res.render('pages/login');
//   });

//   router.get('/register', (req, res) => {
//     res.render('pages/register');
//   })

//   router.get('/tables', auth, (req, res) => {
//     res.render('pages/tables');
//   });

//   // router.get('/profile', auth, (req, res) => {

//   //   res.render('pages/profile');
//   // });

// router.get('/contact', contact.getContact);

// router.use('/user', authRouter);

module.exports = router;