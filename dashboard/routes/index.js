var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Tareas = require('../models/tarea');

/* GET home page. */
router.get('/', function(req, res, next) {
  Tareas.getTareas(function(e, tars){
  	console.log(tars.titulo);
		res.render('index', {tareas: tars});
	});
});

router.post('/', function(req, res, next) {
  
  //tarea.conexion();
  var tit = req.param('Titulo');
  var desc = req.param('Descripcion');
  var resp = req.param('Responsable');
  	var tarea = new Tareas ({
      titulo: tit,
      descripcion: desc,
      responsable: resp,
      estado: 'inicial'
    });

    // Saving it to the database.
    tarea.save(function (err) {if (err) console.log ('Error on save!')});
    //res.send("se hace");
    console.log("llega");
    res.render('index');
 });  

router.post('/save', function(req, res, next){

});

module.exports = router;
