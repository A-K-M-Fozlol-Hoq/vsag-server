const serviceController = require('../controllers/serviceController');
const express = require('express');
// Destructuring controllers
const { addService, getServices, deleteService } = serviceController;

// Router Object -- module scaffolding
let router = express.Router();

// Path => /product/add
router.route('/add').post(addService);

// Path => product/getAll
router.route('/getAll').get(getServices);

// Path => product/deleteById/:searchStr
router.route('/deleteById/:id').delete(deleteService);
module.exports = router;
