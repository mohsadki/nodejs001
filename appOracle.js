/**
 * 
 */
console.log("Hello, Word");
var http = require('http');
var oracledb = require('./oracledb');
var SimpleOracleDB = require('simple-oracledb');
SimpleOracleDB.extend(oracledb);

SimpleOracleDB.getConnection(
		  {
		    user          : "simohamed",
		    password      : "simohamed",
		    connectString : "localhost/XE"
		  },
		  function(err, connection)
		  {
		    if (err) { console.error(err.message); return; }
		 
		    connection.execute(
		      "SELECT department_id, department_name " +
		        "FROM departments " +
		        "WHERE manager_id < :id",
		      [110],  // bind value for :id 
		      function(err, result)
		      {
		        if (err) { console.error(err.message); return; }
		        console.log(result.rows);
		      });
		  });
// Create an HTTP server
var srv = http.createServer(function(req, res) {
	res.end("Hello, Word");
	res.end(result.rows);
});
srv.listen(1221);