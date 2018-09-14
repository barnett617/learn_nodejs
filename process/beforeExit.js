/**
 * The process object is a global that provides information about, 
 * and control over, the current Node.js process. 
 * As a global, it is always available to Node.js applications without using require().
 * 
 * The process object is an instance of EventEmitter.
 */

 /**
  * beforeExit
  * 
  * The 'beforeExit' event is emitted 
  * when Node.js empties its event loop and 
  * has no additional work to schedule
  * 在node事件循环空转并且没有另外的任务时触发
  * 
  * Normally, the Node.js process will exit when there is no work scheduled,
  *  but a listener registered on the 'beforeExit' event can make asynchronous calls, 
  * and thereby cause the Node.js process to continue.
  * 通常node进程会在没有任务时退出，但注册在beforeExit上的监听器可以唤起异步调用，导致node进程会继续工作
  * 
  * The listener callback function is invoked 
  * with the value of `process.exitCode` passed as the only argument.
  * 监听器回调函数只被伴有process.exitCode这唯一参数的值所唤醒
  * 
  * The 'beforeExit' event is not emitted for 
  * conditions causing explicit termination, 
  * such as calling process.exit() or uncaught exceptions.
  * beforeExit事件不会被条件导致的明确终止所触发
  * 比如调用process.exit()或发生异常
  * 
  * The 'beforeExit' should not be used 
  * as an alternative to the 'exit' event 
  * unless the intention is to schedule additional work.
  * beforeExit不应该被用作替代exit事件，除非企图执行额外的任务
  */
process.on("beforeExit", (code) => {
    console.log(code);
})
// 0
