const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customersController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

router.post(
  '/',
  auth,
  [
    check('firstName', 'The name field is required').not().isEmpty(),
    check('lastName', 'The Last name field is required').not().isEmpty(),
    check('email', 'Please enter a valid email address').isEmail(),
    check('document', 'The document field is required').not().isEmpty(),
    check('address', 'The address field is required').not().isEmpty(),
  ],
  customersController.newCustomer
);

router.get('/', auth, customersController.getCustomers);
router.get('/:id', auth, customersController.getCustomer);
router.put('/:id', auth, customersController.updateCustomer);
router.delete('/:id', auth, customersController.deleteCustomer);

module.exports = router;
