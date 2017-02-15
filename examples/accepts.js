var accepts = require('accepts');
var http = require('http');

function app(req, res) {
	var accept = accepts(req);
	console.log(accept.types());

	switch(accept.type(['json', 'html'])) {
		case 'json':
			res.setHeader('Content-Type', 'application/json');
			res.write('{"name": "Bowen"}');
			break;
		case 'html':
			res.setHeader('Content-Type', 'text/html');
			res.write('<p>name: Bowen</p>');
			break;
		default:
			res.setHeader('Content-Type', 'text/plain');
			res.write('My name is Bowen');
			break;
	}

	res.end();
}

http.createServer(app)
	.listen(3000, function() {
		console.log('server is listening on port 3000'.toUpperCase());
	});


