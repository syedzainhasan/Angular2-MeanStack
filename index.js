var express = require('express');
const app = express();
const router = express.Router();

const mongoose = require('mongoose');

const config   =require('./config/database');

const path = require('path');
const authentication = require('./routes/authentication')(router);
const agent = require('./routes/agent')(router);

const doctor = require('./routes/doctor')(router);

const employee = require('./routes/employee')(router);
const customer = require('./routes/customer')(router);
const product = require('./routes/product')(router);




const bodyParser = require('body-parser');
const cors = require('cors');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri ,(err)=>{
  if(err)
  {
    console.log('Sorry stupid shit cant connect',err);
  }
  else{
    console.log('Conected to database  '+config.db); 
  }
});

 

app.use(cors({

  origin: 'http://localhost:4200/'
}));



////////////////////////////THIS SHOULD BE IN START OF ALL ROUTES////////////////////////////


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
////////////////////////////THIS SHOULD BE IN START OF ALL ROUTES////////////////////////////






app.use(express.static(__dirname + '/client/dist/'));

app.use('/authentication',authentication);
app.use('/agent',agent);
app.use('/employee',employee);
app.use('/customer',customer);
app.use('/doctor',doctor);
app.use('/product',product);




app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/client/dist/'));
  });
  
  app.listen(8080, ()=> {console.log('Listenting');});