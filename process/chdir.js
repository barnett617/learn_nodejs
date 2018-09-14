/**
 * The process.chdir() method changes the current working directory of the Node.js process 
 * or throws an exception if doing so fails 
 * (for instance, if the specified directory does not exist).
 * 改变node进程的当前工作空间
 * 如果失败会抛异常（比如指定目录不存在）
 */
console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir('/tmp');
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

// Starting directory: /Users/wangxin/code/github/node/learn_nodejs
// New directory: /private/tmp