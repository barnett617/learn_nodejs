const path = require('path');

function print(content) {
  console.log(content);
}

// console.log(process.env.PATH);

// /Users/wangxin/.nvm/versions/node/v10.0.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/wangxin/anaconda3/bin:/usr/local/mysql/bin:/Users/wangxin/anaconda3/bin:/usr/local/mysql/bin


// console.log(process.env.PATH.split(path.delimiter));

// [ '/Users/wangxin/.nvm/versions/node/v10.0.0/bin',
//   '/usr/local/bin',
//   '/usr/bin',
//   '/bin',
//   '/usr/sbin',
//   '/sbin',
//   '/Users/wangxin/anaconda3/bin',
//   '/usr/local/mysql/bin',
//   '/Users/wangxin/anaconda3/bin',
//   '/usr/local/mysql/bin' ]


// print(path.extname('index.html'));
// Returns: '.html'

// print(path.extname('index.coffee.md'))
// Returns: '.md'

// print(path.extname('index.'));
// Returns: '.'

/**
 * If there is no . in the last portion of the path, 
 * or if the first character of the basename of path (see path.basename()) is ., 
 * then an empty string is returned.
 * 路径最后一部分没有点或路径第一个字符是点
 * 会返回空串
 */

// print(path.extname('index'));
// Returns: ''

// print(path.extname('.index'));
// Returns: ''


// print(path.parse('/home/user/dir/file.txt'));

// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘


/**
 * The path.format() method returns a path string from an object. 
 * This is the opposite of path.parse().
 */

// If `dir`, `root` and `base` are provided,
// `${dir}${path.sep}${base}`
// will be returned. 
// `root` is ignored.
// Because dir includes root
var a = path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
});
// print('a: ' + a);
// a: /home/user/dir/file.txt

// `root` will be used if `dir` is not specified.
// If only `root` is provided or `dir` is equal to `root` then the
// platform separator will not be included. 
// `ext` will be ignored.
// Because base includes ext
var b = path.format({
  root: '/',
  base: 'file.txt',
  ext: 'ignored'
});
// print('b: ' + b);
// b: /file.txt

// `name` + `ext` will be used if `base` is not specified.
var c = path.format({
  root: '/',
  name: 'file',
  ext: '.txt'
});
// print('c: ' + c);
// c: /file.txt


/**
 * The path.normalize() method normalizes the given path, 
 * resolving '..' and '.' segments.
 * 会解析..和.的部分
 */

var d = path.normalize('/foo/bar//baz/asdf/quux/..');
// print('d: ' + d);
// d: /foo/bar/baz/asdf

/**
 * If the path is a zero-length string, 
 * '.' is returned, representing the current working directory.
 */
var e = path.normalize('');
// print('e: ' + e);
// e: .

/**
 * The path.join() method joins all given path segments together 
 * using the platform specific separator as a delimiter, 
 * then **normalizes** the resulting path.
 */

var f = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// print('f: ' + f);
// d: /foo/bar/baz/asdf

// var g = path.join('foo', {}, 'bar');
// print('g: ' + g);
// path.js:39
//     throw new ERR_INVALID_ARG_TYPE('path', 'string', path);
//     ^

// TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type object
//     at assertPath (path.js:39:11)
//     at Object.join (path.js:1157:7)
//     at Object.<anonymous> (/Users/wangxin/code/github/node/learn_nodejs/path/path.js:128:14)
//     at Module._compile (internal/modules/cjs/loader.js:678:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:689:10)
//     at Module.load (internal/modules/cjs/loader.js:589:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:528:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:520:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:719:10)
//     at startup (internal/bootstrap/node.js:228:19)


/**
 * The path.relative() method returns the relative path from `from` to `to`
 * based on the current working directory. 
 * 基于当前路径，如何从from路径到达to路径
 */
var h = path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb');
// print('h: ' + h);

// h: ../../impl/bbb


/**
 * If from and to each resolve to the same path (after calling path.resolve() on each), 
 * a zero-length string is returned.
 * 若from和to相同，则返回空串
 */
var i = path.relative('/data/orandea/test/aaa', '/data/orandea/test/aaa');
// print('i: ' + i);
// i:


/**
 * The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
 * 
 * The given sequence of paths is processed from right to left
 * with each subsequent path prepended until an absolute path is constructed
 * 由右向左解析，直到发现第一个绝对路径
 */
var j = path.resolve('/foo', '/bar', 'baz');
// print('j: ' + j);
// j: /bar/baz

/**
 * If after processing all given path segments an absolute path has not yet been generated, 
 * the current working directory is used.
 */
var k = path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// print('k: ' + k);
// k: /Users/wangxin/code/github/node/learn_nodejs/wwwroot/static_files/gif/image.gif

/**
 * If no path segments are passed, 
 * path.resolve() will return the absolute path of the current working directory.
 */
var l = path.resolve('');
// print('l: ' + l);
// l: /Users/wangxin/code/github/node/learn_nodejs

var m = path.resolve('/foo/bar', './baz');
// print('m: ' + m);
// m: /foo/bar/baz

var n = path.resolve('/foo/bar', '/tmp/file/');
// print('n: ' + n);
// n: /tmp/file


/**
 * path.sep provides the platform-specific path segment separator
 */
var o = 'foo/bar/baz'.split(path.sep);
// print('o: ' + o);
// o: foo,bar,baz