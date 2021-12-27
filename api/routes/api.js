const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// get
router.get('/employees', function (req, res) {
  Employee.find({}, function (err, users) {
    res.send(users);
  });
});

// create
router.post('/employees', function (req, res, next) {
  Employee.create(req.body).then(function (event) {
    res.send(event);
  }).catch(next);
});

// update
router.put('/employees/:id', function (req, res, next) {
  Employee.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Employee.findOne({ _id: req.params.id }).then(function (event) {
      res.send(event);
    });
  });
});

// delete
router.delete('/employees/:id', function (req, res, next) {
  Employee.findByIdAndRemove({ _id: req.params.id }).then(function (event) {
    res.send(event);
  });
});


module.exports = router;
