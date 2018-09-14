/**
 * The process.argv property returns an array 
 * containing the command line arguments passed when the Node.js process was launched
 * 
 * The first element will be process.execPath
 * See process.argv0 if access to the original value of argv[0] is needed
 * 第一个参数是node进程的可执行文件的路径
 * The second element will be the path to the JavaScript file being executed
 * 第二个参数是js文件执行所在路径
 * The remaining elements will be any additional command line arguments
 * 剩余的才是命令行中执行脚本携带的参数
 */
// console.log(process.argv0);
// console.log(process.execPath);

// node

// console.log(process.argv);

// [ '/Users/wangxin/.nvm/versions/node/v10.0.0/bin/node',
//   '/Users/wangxin/code/github/node/learn_nodejs/process/argv.js',
//   'test' ]

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
// 0: /Users/wangxin/.nvm/versions/node/v10.0.0/bin/node
// 1: /Users/wangxin/code/github/node/learn_nodejs/process/argv.js
// 2: test=2