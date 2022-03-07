// Models
const Admin = require('../models/Admin');
const adminController = {};

adminController.addAdmin = async (req, res, next) => {
  // Read data from request body
  const email = req.body.email;
  const password = req.body.password;

  const adminInfo = {
    email,
    password,
  };
  const admin = await new Admin(adminInfo);

  await admin.save((err) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(service);
    }
  });
};

adminController.isAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.find({});
    res.send(admin);
  } catch (err) {
    res.send(err);
  }
};

adminController.deleteAdmin = async (req, res, next) => {
  // Read Data from request body
  const id = req.params.id;
  try {
    const admin = await Admin.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      message: 'Service was removed successfully!',
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = adminController;
