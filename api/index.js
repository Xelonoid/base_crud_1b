var e = require('express');
var r = e.Router();


var u = require('./resources/users');
r.get('/users', u.read); //Read
r.get('/user/:user_key', u.detail); //Detail
r.post('/users', u.create); //Create
r.post('/user/update', u.update); //Update
r.post('/user/delete', u.delete); //Delete


var l = require('./resources/parkir');
r.get('/parkir', l.read); //Read
r.post('/parkir', l.create); //Create
r.put('/parkir/:key', l.update); //Update
r.delete('/parkir/:key', l.delete); //Delete


var al = require('./resources/apply_parkir');
r.get('/apply_parkir', al.read); //Read
r.post('/apply_parkir', al.create); //Create
r.put('/apply_parkir/:key', al.update); //Update
r.delete('/apply_parkir/:key', al.delete); //Delete


module.exports = r;