/**
 * 
 */
console.log("Hello, Word");

http = require('http');

// Create an HTTP server
var srv = http.createServer(function(req, res) {
	res.end("Hello, Word");
});
srv.listen(1221);