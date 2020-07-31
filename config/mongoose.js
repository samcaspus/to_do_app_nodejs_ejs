const mongoose = require("mongoose");
/// established a node js connection with the data base intentional wrong naming so that the db name is not obvious

mongoose.connect("mongodb://localhost/constact_list");

/// got the data base creation variable in order to ensure proper establishment

const db = mongoose.connection;

//// made error handling to ensure that we have established the connection

db.on('error', console.error.bind(console, 'connection error:'));


/// notification in order to ensure that the connection has been established properly

db.once('open', function () {
    console.log("connection to nosql database established successfully");
});
