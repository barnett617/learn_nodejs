const http = require('http');

/**
 * http message header
 */
// var header = { 
//   'content-length': '123',
//   'content-type': 'text/plain',
//   'connection': 'keep-alive',
//   'host': 'mysite.com',
//   'accept': '*/*' 
// };

http.get({
  hostname: 'localhost',
  port: 4500,
  path: '/',
  agent: false  // create a new agent just for this one request
}, (res) => {
  // Do stuff with response
  console.log(res);
}, (err) => {
  console.log('err: ' + err);
});