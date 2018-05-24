const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
const Schema = mongoose.Schema;

var supplier_Schema = new Schema({
  Firstname:  { type: String, required: true ,unique:true, },
  Lastname: { type: String, required: true , },
  Address: { type: String, required: true , },
  EmailID: { type: String, required: true , },
  Phone:{ type: Number, required: true , },
  CompanyName:  { type: String, required: true ,unique:true, },
  CompanyEmail: { type: String, required: true , }
});
module.exports = mongoose.model('Supplier', supplier_Schema);