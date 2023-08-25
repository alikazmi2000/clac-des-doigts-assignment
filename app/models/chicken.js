const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const ChickenSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    birthday: {
      type: Date,
    },
    weight: {
      type: Number,
      required: true
    },
    steps: {
      type: Number,
      default: 0
    },
    isRunning: {
      type: Boolean,
      default: false
    },
    farm: {
      type: Schema.ObjectId,
      ref: "farm",
  },
  },
  {
    versionKey: false,
    timestamps: true
  }
);






ChickenSchema.plugin(mongoosePaginate);
ChickenSchema.plugin(mongooseDelete, { overrideMethods: true });
module.exports = mongoose.model('Chicken', ChickenSchema);
