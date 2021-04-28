const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post(
  '/',
  [
    check('email', 'E-mail is required').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
  ],
  authController.authenticateUser
);

router.get('/', auth, authController.authenticatedUser);

module.exports = router;
