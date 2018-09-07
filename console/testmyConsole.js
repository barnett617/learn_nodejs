const console = require('./myConsole');
console.assert(false, 'this message will print, but no error thrown');
console.log('this will also print');

// Assertion failed: this message will print, but no error thrown
// this will also print