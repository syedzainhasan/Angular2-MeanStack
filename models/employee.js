const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
const Schema = mongoose.Schema;

var employee_Schema = new Schema({
  Firstname:  { type: String, required: true ,unique:true, },
  Lastname: { type: String, required: true , },
  Address: { type: String, required: true , },
  EmailID: { type: String, required: true , },
  Phone:{ type: Number, required: true , },
  Gender:  { type: String, required: true , },
  JoiningDate: { type: Date, required: true , },
  CNIC:{ type: String, required: true ,unique:true },
  Salary:{ type: String, required: true,  },
 Password:{ type: String, required: true,  },
 Designation:{ type: String, required: true,  },

});
module.exports = mongoose.model('Employee', employee_Schema);