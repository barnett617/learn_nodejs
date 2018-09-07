console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout
console.error(new Error('Whoops, something bad happened'));
// Prints: [Error: Whoops, something bad happened], to stderr

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr

// hello world
// hello world
// Error: Whoops, something bad happened
//     at Object.<anonymous> (/Users/wangxin/code/github/node/learn_nodejs/console.js:5:15)
//     at Module._compile (internal/modules/cjs/loader.js:678:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)
//     at Module.load (internal/modules/cjs/loader.js:589:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:528:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:520:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:719:10)
//     at startup (internal/bootstrap/node.js:228:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:575:3)
// Danger Will Robinson! Danger!