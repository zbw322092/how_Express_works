var http = require('http');

var server = http.createServer(function(req, res) {
	// console.log(req);
	// console.log(req.connection);
	// console.log(req.connection.encrypted);
	// console.log(req.app);
	// console.log(req.protocol);
	console.log(new http.IncomingMessage == req);
	res.end();
});

server.listen(3002, function() {
	console.log('server is listening on port 3002'.toUpperCase());
});