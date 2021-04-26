const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const { check } = require('express-validator');

router.post(
  '/',
  [
    check('name', 'The Name field is required').not().isEmpty(),
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
  ],
  usersController.newUser
);

module.exports = router;
