const net = require('net');

const server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('errro', (err) => {
  throw err;
});

/**
 * Don't call server.address() until the 'listening' event has been emitted.
 */
server.listen(() => {
  console.log('opened server on', server.address());
});

// opened server on { address: '::', family: 'IPv6', port: 55377 }