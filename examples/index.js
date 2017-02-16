var deprecateObject = require('./deprecate.js');

console.log(deprecateObject);
deprecateObject.oldfunction();

deprecateObject.weirdfunction();
deprecateObject.weirdfunction('Bowen', 'Zhong');

deprecateObject.oldprop;