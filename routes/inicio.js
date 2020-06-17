var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
var Juguete=require('../models/juguetes');

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var assert = require('assert');

var url = 'mongodb://localhost:3000/test';

router.get('/juguete',function(req,res,next){

	Juguete.find({},function(err,data){
		var x={juguetes:data};
		res.render("./inicio/juguete",x);
	});
});

router.get('/',function(req,res,next){
	Juguete.find( {} ,(err,datos)=>{
		res.status(200).json(datos);
	});
	});


module.exports = router;
