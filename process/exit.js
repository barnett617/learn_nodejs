/**
 * The 'exit' event is emitted when the Node.js process is about to exit as a result of either:
 * The process.exit() method being called explicitly;
 * The Node.js event loop no longer having any additional work to perform
 * exit事件会在node进程在以下情况之时触发：
 * 1. process.exit()方法被明确调用
 * 2. node事件循环不再有另外的任务需要执行
 * 
 * There is no way to prevent the exiting of the event loop at this point, 
 * and once all 'exit' listeners have finished running the Node.js process will terminate.
 * 没可能在这个点阻止事件循环的退出
 * 一旦exit所有的监听器完成，node进程将终止
 * 
 * The listener callback function is invoked with the exit code specified either by 
 * the process.exitCode property, 
 * or the exitCode argument passed to the process.exit() method.
 * exit的监听器回调函数被唤醒，伴随以下情况所指定的退出码
 * 1. process.exitCode属性
 * 2. 传递给process.exit()方法的退出码
 */
// process.on('exit', (code) => {
//     console.log(`About to exit with code: ${code}`);
// });
// About to exit with code: 0

// console.log(process.exitCode);s
// undefined


// process.on('beforeExit', (exitCode) => {
//     process.exitCode = 2;
// });

// process.on('exit', (code) => {
//     console.log(code);
// });
// 2


// process.on('exit', (code) => {
//     console.log(code);
// });
// process.exit(3);
// 3


/**
 * Listener functions must only perform synchronous operations. 
 * The Node.js process will exit immediately after calling the 'exit' event listeners 
 * causing any additional work still queued in the event loop to be abandoned. 
 * exit的监听函数只能同步操作
 * node进程会在调用exit事件监听器后立刻终止
 * 并抛弃任何额外的在事件循环队列中的任务
 */
// In the following example, for instance, the timeout will never occur:
process.on('exit', (code) => {
  setTimeout(() => {
    console.log('This will not run');
  }, 0);
});