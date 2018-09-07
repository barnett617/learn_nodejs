// All the methods have asynchronous and synchronous forms.
const fs = require('fs');

/**
 * The asynchronous form always takes a completion callback as its last argument. 
 * The arguments passed to the completion callback depend on the method, 
 * but the first argument is always reserved for an exception. 
 * If the operation was completed successfully, then the first argument will be null or undefined.
 */

// fs.unlink('/tmp/hello', (err) => {
//   if (err) throw err;
//   console.log('successfully delete /tmp/hello');
// });

// /Users/wangxin/code/github/node/learn_nodejs/file_system/fs.js:11
//   if (err) throw err;
//            ^

// Error: ENOENT: no such file or directory, unlink '/tmp/hello'


/**
 * When using the synchronous form any exceptions are immediately thrown. 
 * Exceptions may be handled using try/catch, or they may be allowed to bubble up.
 */

//  fs.unlinkSync('/tmp/hello');
//  console.log('successfully delete /tmp/hello');

//  fs.js:110
//     throw err;
//     ^

// Error: ENOENT: no such file or directory, unlink '/tmp/hello'
//     at Object.fs.unlinkSync (fs.js:1015:3)
//     at Object.<anonymous> (/Users/wangxin/code/github/node/learn_nodejs/file_system/fs.js:28:5)
//     at Module._compile (internal/modules/cjs/loader.js:678:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)
//     at Module.load (internal/modules/cjs/loader.js:589:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:528:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:520:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:719:10)
//     at startup (internal/bootstrap/node.js:228:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:575:3)


/**
 * With the asynchronous methods there is no guaranteed ordering. 
 * So the following is prone to error:
 */
fs.rename('/tmp/hello', '/tmp/world', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});
fs.stat('/tmp/world', (err, stats) => {
  if (err) throw err;
  console.log(`stats: ${JSON.stringify(stats)}`);
});

// /Users/wangxin/code/github/node/learn_nodejs/file_system/fs.js:53
//   if (err) throw err;
//            ^

// Error: ENOENT: no such file or directory, rename '/tmp/hello' -> 'tmp/world'