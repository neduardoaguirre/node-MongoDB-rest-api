const Customer = require('../models/Customer');
const { validationResult } = require('express-validator');

exports.newCustomer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array() });
  }
  const { document } = req.body;
  try {
    let customer = await Customer.findOne({ document });
    if (customer) {
      return res
        .status(400)
        .json({ msg: 'A customer already exist with this document' });
    }
    customer = new Customer(req.body);
    customer.createdBy = req.user.id;
    await customer.save();
    res.json(customer);
  } catch (error) {
    console.log(error);
    res.staus(500).send('Sorry, something went wrong');
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({
      created: -1,
    });
    res.json({ customers });
  } catch (error) {
    console.log(error);
    res.status(500).send('Sorry, something went wrong');
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const customer = await Customer.find({ _id: req.params.id });
    res.json({ customer });
  } catch (error) {
    console.log(error);
    res.status(500).send('Sorry, this user does not exist.');
  }
};

exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json({ customer });
  } catch (error) {
    console.log('Sorry, this user does not exist.');
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: 'Customer deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Sorry, this user does not exist.');
  }
};
