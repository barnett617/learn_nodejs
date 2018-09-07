// console.time('100-elements');
// for (let i = 0; i < 100; i++) {}
// console.timeEnd('100-elements');
// 100-elements: 0.081ms

// console.time('time');
// for (let i = 0; i < 100; i++) {}
// console.timeEnd('time');
// time: 0.070ms

console.trace('Show me');
// Trace: Show me
//     at Object.<anonymous> (/Users/wangxin/code/github/node/learn_nodejs/console-time.js:11:9)
//     at Module._compile (internal/modules/cjs/loader.js:678:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)
//     at Module.load (internal/modules/cjs/loader.js:589:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:528:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:520:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:719:10)
//     at startup (internal/bootstrap/node.js:228:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:575:3)