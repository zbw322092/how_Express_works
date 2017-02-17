var fresh = require('fresh');

var reqHeaders = {
	'if-none-match': '"foo"'
};

var resHeaders = {
	'etag': '"bar"'
};

console.log(fresh(reqHeaders, resHeaders)); // false

var reqHeaders2 = {
	'if-none-match': '"foo"'
};

var resHeaders2 = {
	'etag': '"foo"'
};

console.log(fresh(reqHeaders2, resHeaders2)); // true