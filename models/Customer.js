const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  document: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  created: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model('Customer', CustomerSchema);
