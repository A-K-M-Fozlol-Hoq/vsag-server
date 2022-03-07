// Models
const Product = require('../models/Product');
const emailController = {};

emailController.send = async (req, res, next) => {
  // Read data from request body
  const id = req.body._id;
  const sendTo = req.body.email;

  try {
    const product = await Product.findById({
      id,
    });
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    var mailOptions = {
      from: process.env.EMAIL,
      to: sendTo,
      subject: 'Product Price',
      text: `The price of your selected product is: ${product.price}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.send('err' + error);
      } else {
        res.send(info);
      }
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = emailController;
