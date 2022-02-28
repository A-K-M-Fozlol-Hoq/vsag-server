const mongoose = require('mongoose');
const { Schema } = mongoose;
const objectId = Schema.ObjectId;
const serviceSChema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
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

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
