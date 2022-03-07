const adminController = require('../controllers/adminController');
const express = require('express');
// Destructuring controllers
const { addAdmin, isAdmin, deleteAdmin } = adminController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /admin/add
router.route('/add').post(addAdmin);

// Path => admin/getAll
router.route('/isAdmin').post(isAdmin);

// Path => admin/getByName/:searchStr
router.route('/deleteById/:id').delete(deleteAdmin);
module.exports = router;
