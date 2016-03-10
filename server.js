var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');

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

app.post('/addProject', function (req, res) {
    var bank = req.body;
    console.log(project);
    connection.query('insert into project set ?', project, function (err, result) {
        if (err) {
            console.log(err)
            return resp.end(JSON.stringify({
                success: false
            }));
        } else {
            console.log(result.affectedRows);
            return resp.end(JSON.stringify({
                success: true
            }));
        }
    });

});

app.post('/addBank', function (req, resp) {

    var bank = req.body;
    console.log(bank);
    connection.query('insert into bank set ?', bank, function (err, result) {
        if (err) {
            console.log(err)
            return resp.end(JSON.stringify({
                success: false
            }));
        } else {
            console.log(result.affectedRows);
            return resp.end(JSON.stringify({
                success: true
            }));
        }
    });
});

//search bank by RT
app.get( '/SearchRt', function(req, res){
    connection.query('SELECT * FROM bank WHERE rt = ?', req.query.rt, function(err,rows){
        if(err) throw err;
        res.end(JSON.stringify(rows));
        // wrap result-set as json
        console.log('Json row was send');
    });
});

// Select projects
app.get( '/Projects', function(req, res){
    connection.query('SELECT * FROM project', function(err,rows){
        if(err) throw err;
        res.end(JSON.stringify(rows));
        // wrap result-set as json
        console.log('Send projects!' + JSON.stringify(rows));
    });
});

// Select status 
app.get( '/Status', function(req, res){
    connection.query('SELECT * FROM status', function(err,rows){
        if(err) throw err;
        res.end(JSON.stringify(rows));
        // wrap result-set as json
        console.log('Send status!' + JSON.stringify(rows));
    });
});

app.listen(3000);


//connection.end();