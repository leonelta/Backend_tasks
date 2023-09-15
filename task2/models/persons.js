const mongoose = require('mongoose');

// Adding fields needed

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  track: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('Persons', personSchema);
