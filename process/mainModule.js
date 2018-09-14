/**
 * The process.mainModule property provides an alternative way of retrieving require.main. 
 * The difference is that if the main module changes at runtime, 
 * require.main may still refer to the original main module in modules 
 * that were required before the change occurred. 
 * 二者区别是如果运行时主模块改变，require.main仍指向模块中的主模块
 * Generally, it's safe to assume that the two refer to the same module.
 * 
 * 二者都会是undefined，如果没有入口文件
 */

 console.log(process.mainModule);

//  Module {
//   id: '.',
//   exports: {},
//   parent: null,
//   filename: '/Users/wangxin/code/github/node/learn_nodejs/process/mainModule.js',
//   loaded: false,
//   children: [],
//   paths:
//    [ '/Users/wangxin/code/github/node/learn_nodejs/process/node_modules',
//      '/Users/wangxin/code/github/node/learn_nodejs/node_modules',
//      '/Users/wangxin/code/github/node/node_modules',
//      '/Users/wangxin/code/github/node_modules',
//      '/Users/wangxin/code/node_modules',
//      '/Users/wangxin/node_modules',
//      '/Users/node_modules',
//      '/node_modules' ] }

console.log(require.main);

// Module {
//   id: '.',
//   exports: {},
//   parent: null,
//   filename: '/Users/wangxin/code/github/node/learn_nodejs/process/mainModule.js',
//   loaded: false,
//   children: [],
//   paths:
//    [ '/Users/wangxin/code/github/node/learn_nodejs/process/node_modules',
//      '/Users/wangxin/code/github/node/learn_nodejs/node_modules',
//      '/Users/wangxin/code/github/node/node_modules',
//      '/Users/wangxin/code/github/node_modules',
//      '/Users/wangxin/code/node_modules',
//      '/Users/wangxin/node_modules',
//      '/Users/node_modules',
//      '/node_modules' ] }