var http = require('http');
var is = require('type-is');

var server = http.createServer(function(req, res) {
	var isText = is(req, ['text/*']);
	console.log(is.hasBody(req));
	res.end('you ' + (isText ? 'sent' : 'did not send') + ' me text');
});

server.listen(3001, function() {
	console.log('server is listening on port 3001'.toUpperCase());
});