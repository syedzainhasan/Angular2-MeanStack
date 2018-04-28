var express = require('express');
const app = express();

const mongoose = require('mongoose');

const config   =require('./config/database');

const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri ,(err)=>{
  if(err)
  {
    console.log('SOrry stupid shit cant connect',err);
  }
  else{
    console.log('Conected to database'+config.db);
  }
});


app.use(express.static(__dirname + '/client/dist/'));





app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/client/dist/'));
  });
  
  app.listen(8080, ()=> {console.log('Listenting');});