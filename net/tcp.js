/**
 * The server can be a TCP server or an IPC server, 
 * depending on what it listen() to.
 */
const net = require('net');
const server = net.createServer((c) => {
  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});
server.on('error', (err) => {
  throw err;
});
// server.listen(8124, () => {
//   console.log('server bound');
// });

// server bound
// client connected

// telnet localhost 8124
// Trying ::1...
// Connected to localhost.
// Escape character is '^]'.
// hello

server.listen('/tmp/echo.sock', () => {
  console.log('server bound');
});
// server bound
// client connected

// nc -U /tmp/echo.sock
// hello