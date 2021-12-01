const mysql = require('mysql');
const express = require('express');
var cors = require('cors')

var app = express();

app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pointblue"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



//All File Leaves
app.get('/all-leaves',(req,res)=>{
  res.header('Access-Control-Allow-Origin', '*');
  con.query('SELECT * FROM file_leave',(err, rows, fields)=>{
    if(!err)
      res.send(rows);
    else
      console.log(err);
  })
})

//Add File Leave
app.get('/add-file-leave/:leave_type/:date_from/:remarks/:leave_count/:date_filed',(req,res) =>
{
  res.header('Access-Control-Allow-Origin', '*');
  res.send(req.params);
  var sql = "insert into file_leave (leave_type,date_from,date_filed,remarks,leave_count) values('"+req.params.leave_type+"','"+req.params.date_from+"','"+req.params.date_filed+"','"+req.params.remarks+"','"+req.params.leave_count+"')";
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log('saved');
  });
})

app.listen(3000,() => console.log('Listening on port 3000....'));

