const mongoose = require('mongoose');
const { Schema } = mongoose;
const objectId = Schema.ObjectId;

const clientSchema = mongoose.Schema(
  {
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

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
