const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
  // Running Node.js will now share port 8000 between the workers
  // workers are all separate processes
  // they can be killed or re-spawned depending on a program's needs, without affecting other workers
}

// Master 3432 is running
// Worker 3433 started
// Worker 3434 started
// Worker 3435 started
// Worker 3439 started
// Worker 3436 started
// Worker 3440 started
// Worker 3437 started
// Worker 3438 started

