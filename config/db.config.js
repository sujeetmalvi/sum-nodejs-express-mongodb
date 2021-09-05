
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var db;


// Initialize connection once
MongoClient.connect("mongodb://localhost:27017/testdb", function(err, database) {
  if(err) throw err;

  db = database;
   
  console.log("Listening on port 3000");
});
