const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');

const FarmSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
   
  },
  {
    versionKey: false,
    timestamps: true
  }
);






FarmSchema.plugin(mongoosePaginate);
FarmSchema.plugin(mongooseDelete, { overrideMethods: true });
module.exports = mongoose.model('Farm', FarmSchema);
