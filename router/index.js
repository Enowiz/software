const express = require('express');

const router = express.Router();

const contact = require('../controller/contact/contactController');

const authRouter = require('./auth/authRouter');

const authController = require('../controller/user/auth');

// router.get('/', isAuthenticated, (req, res) => {
//     res.render('pages/dashboard');
// });

const auth = require('../middleware/_isAuth');

router
  .get('/', )

router.get('/', (req, res) => {
    res.render('pages/dashboard');
  });

  router.get('/icons', auth, (req, res) => {
    res.render('pages/icons');
  });
  
  router.get('/maps', auth, (req, res) => {
    res.render('pages/maps');
  });
  
  router.get('/login', (req, res) => {
    res.render('pages/login');
  });

  router.get('/register', (req, res) => {
    res.render('pages/register');
  })

  router.get('/tables', auth, (req, res) => {
    res.render('pages/tables');
  });

  // router.get('/profile', auth, (req, res) => {

  //   res.render('pages/profile');
  // });

router.get('/contact', contact.getContact);

router.use('/user', authRouter);

module.exports = router;