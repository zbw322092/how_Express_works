var http = require('http');
var parseurl = require('parseurl');

var server = http.createServer(function(req, res) {
	console.log(parseurl(req));
	res.end();
});

server.listen(3003, function() {
	console.log('server is listening on port 3003'.toUpperCase());
});

/*
sample result:
Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?user=tj&pet=fluffy',
  query: 'user=tj&pet=fluffy',
  pathname: '/foo/bar',
  path: '/foo/bar?user=tj&pet=fluffy',
  href: '/foo/bar?user=tj&pet=fluffy',
  _raw: '/foo/bar?user=tj&pet=fluffy' }
 */