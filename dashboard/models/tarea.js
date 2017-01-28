var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tareaSchema = new mongoose.Schema({
      titulo: { type: String },
      descripcion: { type: String },
      responsable: { type: String},
      estado: {type: String}
    });

var tarea = module.exports = mongoose.model('dashboard', tareaSchema);  

module.exports.getTareas = function(callback, limit){
	tarea.find(callback).limit(limit);
}

module.exports.edit = function(data, callback){
	tarea.findOne({_id: this.getObjectId(data.id)}, function(e, o){
		o.titulo = data.titulo;
		o.descripcion = data.descripcion;
		o.responsable = data.responsable;
		tarea.save(o);
		callback(o);
	})
}

module.exports.getObjectId = function(id){
	return tarea.db.bson_serializer.ObjectID.createFromHexString(id);
}

module.exports.updateTarea = function(id, tar, option, callback){
	var query = {_id: id};
	var update = {
		titulo: tarea.titulo,
		descrpcion: tar.descripcion,
		responsable: tar.responsable
	}
	tarea.findOneAndUpdate(query, update, option, callback);
}