var mysql = require('mysql')

function fetch(req, res) {
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: 'matrix'
  });

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM matrix", function (err, result) {
      if (err) throw err;
      res.send(result)
    });
  });
}

function modify(req, res) {
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: 'matrix',
    multipleStatements: true
  });

  var sql_query = ''
  for(var i=1; i <= 500; i++) {
    sql_query += "UPDATE matrix SET CPU_utlisation="+ (Math.random(10)*100) +", Memory_utlisation="+ (Math.random(10)*100) + "WHERE id="+ i +";"
  }
  con.query(sql_query, function(err, result) {
    if(err) throw err
    res.send('success')
  })
}

module.exports = {
  fetch,
  modify
}
