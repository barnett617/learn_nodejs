// The child_process.spawn() method spawns the child process asynchronously, 
// without blocking the Node.js event loop.

// const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// stdout: total 0
// drwxr-xr-x  978 root  wheel    31K  8 17 10:29 bin
// drwxr-xr-x  267 root  wheel   8.3K  8  9 11:56 include
// drwxr-xr-x  312 root  wheel   9.8K  8  9 11:56 lib
// drwxr-xr-x  240 root  wheel   7.5K  8 17 10:29 libexec
// drwxr-xr-x   17 root  wheel   544B  9  4 23:25 local
// drwxr-xr-x  248 root  wheel   7.8K  7  4 15:46 sbin
// drwxr-xr-x   47 root  wheel   1.5K  8  9 01:40 share
// drwxr-xr-x    5 root  wheel   160B  7  4 13:52 standalone

// child process exited with code 0


// const util = require('util');
// const exec = util.promisify(require('child_process').exec);

// async function lsExample() {
//   const { stdout, stderr } = await exec('ls');
//   console.log('stdout:', stdout);
//   console.log('stderr:', stderr);
// }
// lsExample();

// stdout: README.md
// assert.js
// child_process.js
// hello-world.js
// static

// stderr:


const { execFile } = require('child_process');
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
// v10.0.0