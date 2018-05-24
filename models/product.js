const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 
const Schema = mongoose.Schema;

var product_Schema = new Schema({
  Name:  { type: String, required: true ,unique:true, },
  Barcode: { type: String, required: true , },
  PacksPerBox: { type: Number, required: true , },
  DrugGroup: { type: String, required: true , },
  Formulae:{ type: String, required: true , },
  UnitsinPack:  { type: Number, required: true , },
  Packing: { type: Number, required: true , },
  MinQuantity:{ type: Number, required: true ,unique:true },
  BoxPerCarton:{ type: Number, required: true,  },
 RackNo:{ type: String, required: true,  },
 

});
module.exports = mongoose.model('product', product_Schema);