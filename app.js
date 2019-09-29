const express = require('express')
const mongoose =  require ('mongoose')
var MongoClient = require('mongodb').MongoClient;
const app = express()

var PORT = process.env.PORT ||5050;

const userSchema = require('./schema.js')
const User = mongoose.model('user', userSchema, 'user')

app.set("view engine", "ejs");
app.set('views', './views');




var url = "mongodb://localhost:27017/AssignmentN1";
var url2= "mongodb+srv://sahil123:sahil123@assignment1-qyulb.mongodb.net/test?retryWrites=true&w=majority"




app.get('/', function (req, res) {

  MongoClient.connect(url2, function(err, db) {
    if (err) throw err;
    var dbo = db.db("AssignmentN1");
    dbo.collection("Users").find({}, ).toArray(function(err, result) {
      if (err) throw err;



      console.log(result);

      res.render('index',{use:result});
      db.close();
    });


  });


})

app.listen(PORT, ()=> {console.log('port 5050')})
