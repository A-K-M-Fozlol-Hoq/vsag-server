//external imports
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
// internal imports
const clientRouter = require('./router/clientRouter');
const productRouter = require('./router/productRouter');

const port = process.env.PORT || 4000;

const app = express();
require('dotenv').config();

//database connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nlclv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.get('/', (req, res) => res.send('Hello World!'));

// database connection
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('database connection successful!'))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

app.use('/client', clientRouter);
app.use('/product', productRouter);
app.use('/service', serviceController);
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
