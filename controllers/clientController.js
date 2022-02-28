// Models
const { Client } = require('../models/Client');
// import Client from '../models/Client.js';
// Handling Error
// import ErrorResponse from '../utils/errorResponse.js';
// // Sending response
// import { sendResponse } from '../utils/sendResponse.js';

// Student Controllers Object --- module scaffolding
const clientController = {};

clientController.addClient = async (req, res, next) => {
  // Read data from request body
  const { image } = req.body;

  //   const clientInfo = {
  //     image,
  //   };

  const clientInfo = {
    image,
  };

  // Create an instance of the Model client
  const client = await new Client(clientInfo);

  // Save the client to the student collection
  client.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(clientInfo, client);
    }
  });
};

clientController.getClients = async (req, res, next) => {
  try {
    // Get all the students saved to the DB
    const clients = await Client.find({});
    res.send(clients);
  } catch (err) {
    res.send(err);
  }
};

clientController.deleteClient = async (req, res, next) => {
  // Read Data from request body
  const id = req.params.id;
  try {
    const client = await Client.findByIdAndDelete({
      _id: id,
    });
    res.status(200).json({
      message: 'User was removed successfully!',
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = clientController;
