const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
const Schema = mongoose.Schema;

var doctor_Schema = new Schema({
  Firstname:  { type: String, required: true ,unique:true, },
  Lastname: { type: String, required: true , },
  Address: { type: String, required: true , },
  EmailID: { type: String, required: true , },
  Phone:{ type: Number, required: true , },
  PMDC:  { type: String, required: true , },
  HospitalName:  { type: String, required: true , },
  
});
module.exports = mongoose.model('Doctor', doctor_Schema);