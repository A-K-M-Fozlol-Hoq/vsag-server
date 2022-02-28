const mongoose = require('mongoose');

const clientSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;
