const mongoose = require('mongoose');
const { Schema } = mongoose;
const objectId = Schema.ObjectId;
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    _id: {
      type: objectId,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
