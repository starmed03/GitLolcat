var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'sa',
  password: 'SQL_1345',
  database: 'db_lolcat'
});

connection.connect(function(err) {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Error Connecting DB");
  }
});

app.post('/addProject', function(req, res) {

  var bank = req.body;
  console.log(bank);
  connection.query('insert into project set ?', project, function(err, result) {
    if (err) {
      console.log(err);
      result.success = false;
    } else {
      console.log("Project Added" + result);
      //result.json(doc);
      result.success = true;
    }
  });
});

app.post('/addBank', function(req, res) {

  var bank = req.body;
  console.log(bank);
  connection.query('insert into bank set ?', bank, function(err, result) {
    if (err) {
      console.log(err);
      result.success = false;
    } else {
      console.log("Bank Added" + result);
      //result.json(doc);
      result.success = true;
    }
  });
});

app.listen(3000);


//connection.end();