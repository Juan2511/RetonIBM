// Loading modules
var express = require('express');
var lowdb = require('lowdb');
var storage = require('lowdb/file-sync');
var uuid = require('uuid');
var bodyParser = require('body-parser');
// Instantiating express module
var app = express();
// Instantiating database module
// This will create db.json storage in the root folder
app.db = lowdb('db.json', {
    storage: storage
});
// Adding body-parser middleware to parser JSON data
app.use(bodyParser.json());

// Adding new task
app.post('/retoibm/sumar', function(req, res) {
    var task = req.body;
    task.id = uuid();
    app.db('tasks').push(task)
    return res.status(201).end();
});
// API server listing port 3000
app.listen(3000, function() {
    console.log('API up and running');
});
// Exporting the app module
module.exports = app;