const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const NewProjectSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "validation message"],
      minlength: [2, "validation message"]
   },
   price: {
      type: Number,
      required: [true, "validation message"],
      min: [2, "validation message"]
   },
   isVeterean: {
      type: Boolean
   },
   imageUpload: {
      type: String,
   }
}, { timestamps: true })

const NewProject = mongoose.model('NewProject', NewProjectSchema);
module.exports = NewProject;