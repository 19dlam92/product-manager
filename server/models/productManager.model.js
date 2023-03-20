const mongoose = require('mongoose');
const bcrypt = require('bcrypt');



const ProductManagerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required!"],
    minlength: [2, "Please enter at least 2 characters"]
  },
  lastName: {
    type: String,
    required: [true, "Last name is required!"],
    minlength: [2, "Please enter at least 2 characters"]
  },
  age: {
    type: Number,
    required: [true, "Your age is required!"],
    min: [2, "Please enter at least 2 numbers"]
  },
  description: {
    type: String,
    minlength: [2, "Provide a description (optional)"]
  },
  isVeterean: {
    type: Boolean,
  },
  imageUpload: {
    type: String,
    required: [true, "Please upload an image!"]
  }
}, { timestamps: true })

const ProductManager = mongoose.model('ProductManager', ProductManagerSchema);
module.exports = ProductManager;