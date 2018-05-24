const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
const Schema = mongoose.Schema;

var customer_Schema = new Schema({
  Firstname:  { type: String, required: true ,unique:true, },
  Lastname: { type: String, required: true , },
  Address: { type: String, required: true , },
  EmailID: { type: String, required: true , },
  Phone:{ type: Number, required: true , },
  HospitalName:  { type: String, required: true , },
 DOB:  { type: Date, required: true , },
  
});
module.exports = mongoose.model('Customer', customer_Schema);