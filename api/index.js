const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

// db
mongoose.promise = global.Promise;
mongoose.connect('mongodb+srv://8teamthrowaway:i2nDZ75tWawUWDz@cluster0.nocab.mongodb.net/statusList?retryWrites=true&w=majority'); // should be in ENV
mongoose.set('useFindAndModify', false);

// middlewares
app.use(bodyParser.json());
app.use(cors());

// routes
app.use('/api', routes);

// errors
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message })
})

app.listen(process.env.port || 4000, function () {
  console.log('Started.');
})