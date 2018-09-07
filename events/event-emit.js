  const EventEmitter = require('events');

  class MyEmitter extends EventEmitter {}

  const myEmitter = new MyEmitter();

  // myEmitter.on('event', () => {
  //   console.log('an event occurred');
  // });
  // myEmitter.emit('event');
  // an event occurred

  // myEmitter.on('event', function(a, b) {
  //   console.log(a, b, this);
  // });
  // myEmitter.emit('event', 'a', 'b');
  // a b MyEmitter {
  //   _events: { event: [Function] },
  //   _eventsCount: 1,
  //   _maxListeners: undefined }

  /**
   * It is possible to use ES6 Arrow Functions as listeners, 
   * however, when doing so, the this keyword will no longer reference the EventEmitter instance
   */
  // myEmitter.on('event', (a, b) => {
  //   console.log(a, b, this);
  // });
  // myEmitter.emit('event', 'a', 'b');
  // a b {}

  /**
   * The EventEmitter calls all listeners synchronously in the order in which they were registered
   * When appropriate, listener functions can switch to an asynchronous mode of operation 
   * using the setImmediate() or process.nextTick() methods
   */
  // myEmitter.on('event', (a, b) => {
  //   setImmediate(() => {
  //     console.log('this happens asynchronously');
  //   });
  // });

  // myEmitter.emit('event', 'a', 'b');
  // this happens asynchronously

  /**
   * When a listener is registered using the eventEmitter.on() method, 
   * that listener will be invoked every time the named event is emitted.
   */
  // let m = 0;
  // myEmitter.on('event', () => {
  //   console.log(++m);
  // });
  // myEmitter.emit('event');
  // myEmitter.emit('event');
  // 1
  // 2

  /**
   * Using the eventEmitter.once() method, 
   * it is possible to register a listener that is called at most once for a particular event. 
   * Once the event is emitted, the listener is unregistered and then called.
   */
  // let m = 0;
  // myEmitter.once('event', () => {
  //   console.log(++m);
  // });
  // myEmitter.emit('event');
  // myEmitter.emit('event');
  // 1

  /**
   * If an EventEmitter does not have at least one listener registered for the 'error' event, 
   * and an 'error' event is emitted, 
   * the error is thrown, 
   * a stack trace is printed, 
   * and the Node.js process exits.
   */
  // myEmitter.emit('error', new Error('whoops'));
//   events.js:167
//       throw er; // Unhandled 'error' event
//       ^

// Error: whoops
//     at Object.<anonymous> (/Users/wangxin/code/github/node/learn_nodejs/events/event-emit.js:79:27)
//     at Module._compile (internal/modules/cjs/loader.js:678:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)
//     at Module.load (internal/modules/cjs/loader.js:589:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:528:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:520:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:719:10)
//     at startup (internal/bootstrap/node.js:228:19)
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:575:3)
// Emitted 'error' event at:
//     at Object.<anonymous> (/Users/wangxin/code/github/node/learn_nodejs/events/event-emit.js:79:13)
//     at Module._compile (internal/modules/cjs/loader.js:678:30)
//     [... lines matching original stack trace ...]
//     at bootstrapNodeJSCore (internal/bootstrap/node.js:575:3)

/**
 * As a best practice, listeners should always be added for the 'error' events.
 */
myEmitter.on('error', (err) => {
  console.log('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops'));
// whoops! there was an error