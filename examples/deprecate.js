var deprecate = require('depd')('my-cool-module');

// Deprecating all calls to a function
// exports.oldfunction = deprecate.function(function oldfunction() {
// 	console.log('It is the old function');
// });

/* another form of usage */
exports.oldfunction = deprecate.function(function () {
	console.log('It is the old function');
}, 'It is the message from oldfunction');



// Conditionally deprecating a function call
exports.weirdfunction = function() {
	if (arguments.length < 2) {
		deprecate('weirdfunction args < 2');
	} else {
		console.log('weirdfunction is working');
	}
};


// Deprecating property access
exports.oldprop = 'something';
// deprecate.property(exports, 'oldprop');
deprecate.property(exports, 'oldprop', 'oldprop has been deprecated');