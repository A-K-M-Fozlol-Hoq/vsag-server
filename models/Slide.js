const mongoose = require('mongoose');

const slideSchema = mongoose.Schema(
  {
    title: {
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
  },
  {
    timestamps: true,
  }
);

const Slide = mongoose.model('Slide', slideSchema);

module.exports = Slide;
