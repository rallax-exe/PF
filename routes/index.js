var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Juguete=require('../models/juguetes');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Juguetes' });
});



module.exports = router;
