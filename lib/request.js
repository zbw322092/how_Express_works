var http = require('http');
var accepts = require('accepts');

var req = exports = module.exports = {
	__proto__: http.IncomingMessage.prototype
};

console.log(req);

req.get =
req.header = function header(name) {
	if (!name) {
		throw new TypeError('name argument is required to req.get');
	}

	if (typeof name !== 'string') {
		throw new TypeError('name must be a string to req.get');
	}

	var lc = name.toLowerCase();
	
	switch (lc) {
		case 'referer':
		case 'referrer':
			// 'this' refers to req object here
			return this.headers.referer ||
				this.headers.referrer;
		default:
			return this.headers[lc];
	}
};


req.accepts = function() {
	var accept = accepts(this);
	return accept.types.apply(accept, arguments);
};































