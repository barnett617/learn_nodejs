/**
 * The process.nextTick() method adds the callback to the "next tick queue". 
 * Once the current turn of the event loop turn runs to completion, 
 * all callbacks currently in the next tick queue will be called.
 * 
 * This is not a simple alias to setTimeout(fn, 0)
 * It is much more efficient. 
 * It runs before any additional I/O events (including timers) fire in subsequent ticks of the event loop.
 */
const arg = 1;
// 第一个参数是回调函数，第二个参数是传给回调函数的参数
// process.nextTick(() => {
//   console.log(arg);
// }, arg);
// 1

// process.nextTick会优于setTimeout(fn, 0)执行
// setTimeout(() => {
//   console.log(2);
// }, 0);
// 1
// 2


// console.log('start');
// process.nextTick(() => {
//   console.log('nextTick callback');
// });
// console.log('scheduled');

// start
// scheduled
// nextTick callback


/**
 * This is important when developing APIs in order to give users the opportunity to 
 * assign event handlers after an object has been constructed 
 * but before any I/O has occurred:
 * 这个特性可用于提供给用户在开发API时在一个对象被构造之后，I/O发生前，委派事件句柄
 */

function MyThing(options) {
  this.setupOptions(options);

  process.nextTick(() => {
    this.startDoingStuff();
  });
}

const thing = new MyThing();
thing.getReadyForStuff();
