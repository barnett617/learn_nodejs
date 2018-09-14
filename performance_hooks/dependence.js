'use strict';
/**
 * Measuring how long it takes to load dependencies
 */
const {
  performance,
  PerformanceObserver
} = require('perf_hooks');
const mod = require('module');

// Monkey patch the require function
mod.Module.prototype.require =
  performance.timerify(mod.Module.prototype.require);
require = performance.timerify(require);

// Activate the observer
const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`require('${entry[0]}')`, entry.duration);
  });
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'], buffered: true });

require('http');

// require('http') 4.16348
// require('http') 3.872602

// require('http') 4.244231
// require('http') 3.929967

// require('http') 4.092637
// require('http') 3.805457