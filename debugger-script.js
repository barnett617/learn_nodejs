global.x = 5;
setTimeout(() => {
  debugger;
  console.log('world');
}, 1000);
console.log('hello');

// node inspect debugger-script.js

// < Debugger listening on ws://127.0.0.1:9229/79cee5c0-7689-4ca5-a070-891d9cc5bfb4
// < For help, see: https://nodejs.org/en/docs/inspector
// < Debugger attached.
// Break on start in debugger-script.js:1
// > 1 (function (exports, require, module, __filename, __dirname) { global.x = 5;
//   2 setTimeout(() => {
//   3   debugger;
// debug> cont
// < hello
// break in debugger-script.js:3
//   1 (function (exports, require, module, __filename, __dirname) { global.x = 5;
//   2 setTimeout(() => {
// > 3   debugger;
//   4   console.log('world');
//   5 }, 1000);
// debug> next
// break in debugger-script.js:4
//   2 setTimeout(() => {
//   3   debugger;
// > 4   console.log('world');
//   5 }, 1000);
//   6 console.log('hello');
// debug> repl
// Press Ctrl + C to leave debug repl
// > x
// 5
// > 2 + 2
// 4


// cont, c - Continue execution
// next, n - Step next
// step, s - Step in
// out, o - Step out
// pause - Pause running code (like pause button in Developer Tools)
