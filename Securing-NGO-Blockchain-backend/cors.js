const express = require('express');
const cors = require('cors');
const app=express();

var whiteList = ['http://localhost:8088','https://localhost:8088'];

var corsOptionDelegate = (req,callback)=>{
	var corsOptiion;
	 console.log(req.header('Origin'));
	if(whiteList.indexOf(req.header('origin'))!=-1)
		corsOptiion={origin:true};
	else
		corsOptiion={origin:false};
	callback(null,corsOptiion);
};

exports.cors=cors();
exports.corsWithOptions=cors(corsOptionDelegate);