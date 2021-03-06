var http = require('http');
var accepts = require('accepts');
var deprecate = require('depd')('express');
var rangeParser = require('range-parser');
var typeis = require('type-is');
var parseurl = require('parseurl');


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

req.acceptsEncodings = function(){
  var accept = accepts(this);
  return accept.encodings.apply(accept, arguments);
};

req.acceptsEncoding = deprecate.function(req.acceptsEncodings, 
	'req.acceptsEncoding: Use acceptsEncodings instead');


req.acceptsCharsets = function() {
	var accept = accepts(this);
	return accept.acceptsCharsets.apply(accept, arguments);
};

req.acceptsCharset = deprecate.function(req.acceptsCharsets,
  'req.acceptsCharset: Use acceptsCharsets instead');


req.acceptsLanguages = function(){
  var accept = accepts(this);
  return accept.languages.apply(accept, arguments);
};

req.acceptsLanguage = deprecate.function(req.acceptsLanguages,
  'req.acceptsLanguage: Use acceptsLanguages instead');



// this method depends on the range-parser package
req.range = function(size, options) {
	var range = this.get('Range');
	if (!range) return;
	return rangeParser(size, range, options);
};


// req.para (todo)


req.is = function(types) {
	var arr = types;

	if (!Array.isArray(types)) {
		arr = new Array(arguments.length);
		for (var i = 0; i < arguments.length; i++) {
			arr[i] = arguments[i];
		}
	}

	return typeis(this, arr);
};


// protocol (todo)

defineGetter(req, 'secure', function secure() {
	return this.protocol === 'https';
});

// ip (todo)

// ips (todo)

// subdomains (todo)
`
defineGetter(req, 'subdomains', function subdomains() {
	var hostname = this.hostname;

	if (!hostname) return [];

	var offset = this.app.get('subdomain offset');

	var subdomains = isIP(hostname)
		? [hostname]
		: hostname.split('.').reverse()

	return subdomains.slice(offset);
});


defineGetter(req, 'path', function path() {
	return parseurl(this).pathname;
});

defineGetter(req, 'fresh', function() {
	var mothod = this.method;
	var s = this.res.statusCode;

	if (method !== 'GET' && method !== 'HEAD')
		return false;

	if ((s > 200 && s < 300) || s === 304) {
		return fresh(this.headers, (this.res._headers || {}));
	}

	return false;
});

defineGetter(req, 'stale', function stale() {
	return !this.fresh;
});


defineGetter(req, 'xhr', function xhr() {
	var val = this.get('X-Requested-With') || '';
	return val.toLowerCase === 'xmlhttprequest';
});






// Helper function for creating a getter on an object.
function defineGetter(obj, name, getter) {
	Object.defineProperty(obj, name, {
		configurable: true,
		enumerable: true,
		get: getter
	});
}





































