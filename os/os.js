const os = require('os');

// The os.arch() method returns a string 
// identifying the operating system CPU architecture for which the Node.js binary was compiled

// The current possible values are: 
// 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', 'x32', and 'x64'

// console.log(os.arch());

// x64


/**
 * Do metion that constants is an argument not a method
 */

// console.log(os.constants);

// { UV_UDP_REUSEADDR: 4,
//   dlopen: { RTLD_LAZY: 1, RTLD_NOW: 2, RTLD_GLOBAL: 8, RTLD_LOCAL: 4 },
//   errno:
//    { E2BIG: 7,
//      EACCES: 13,
//      EADDRINUSE: 48,
//      EADDRNOTAVAIL: 49,
//      EAFNOSUPPORT: 47,
//      EAGAIN: 35,
//      EALREADY: 37,
//      EBADF: 9,
//      EBADMSG: 94,
//      EBUSY: 16,
//      ECANCELED: 89,
//      ECHILD: 10,
//      ECONNABORTED: 53,
//      ECONNREFUSED: 61,
//      ECONNRESET: 54,
//      EDEADLK: 11,
//      EDESTADDRREQ: 39,
//      EDOM: 33,
//      EDQUOT: 69,
//      EEXIST: 17,
//      EFAULT: 14,
//      EFBIG: 27,
//      EHOSTUNREACH: 65,
//      EIDRM: 90,
//      EILSEQ: 92,
//      EINPROGRESS: 36,
//      EINTR: 4,
//      EINVAL: 22,
//      EIO: 5,
//      EISCONN: 56,
//      EISDIR: 21,
//      ELOOP: 62,
//      EMFILE: 24,
//      EMLINK: 31,
//      EMSGSIZE: 40,
//      EMULTIHOP: 95,
//      ENAMETOOLONG: 63,
//      ENETDOWN: 50,
//      ENETRESET: 52,
//      ENETUNREACH: 51,
//      ENFILE: 23,
//      ENOBUFS: 55,
//      ENODATA: 96,
//      ENODEV: 19,
//      ENOENT: 2,
//      ENOEXEC: 8,
//      ENOLCK: 77,
//      ENOLINK: 97,
//      ENOMEM: 12,
//      ENOMSG: 91,
//      ENOPROTOOPT: 42,
//      ENOSPC: 28,
//      ENOSR: 98,
//      ENOSTR: 99,
//      ENOSYS: 78,
//      ENOTCONN: 57,
//      ENOTDIR: 20,
//      ENOTEMPTY: 66,
//      ENOTSOCK: 38,
//      ENOTSUP: 45,
//      ENOTTY: 25,
//      ENXIO: 6,
//      EOPNOTSUPP: 102,
//      EOVERFLOW: 84,
//      EPERM: 1,
//      EPIPE: 32,
//      EPROTO: 100,
//      EPROTONOSUPPORT: 43,
//      EPROTOTYPE: 41,
//      ERANGE: 34,
//      EROFS: 30,
//      ESPIPE: 29,
//      ESRCH: 3,
//      ESTALE: 70,
//      ETIME: 101,
//      ETIMEDOUT: 60,
//      ETXTBSY: 26,
//      EWOULDBLOCK: 35,
//      EXDEV: 18 },
//   signals:
//    { SIGHUP: 1,
//      SIGINT: 2,
//      SIGQUIT: 3,
//      SIGILL: 4,
//      SIGTRAP: 5,
//      SIGABRT: 6,
//      SIGIOT: 6,
//      SIGBUS: 10,
//      SIGFPE: 8,
//      SIGKILL: 9,
//      SIGUSR1: 30,
//      SIGSEGV: 11,
//      SIGUSR2: 31,
//      SIGPIPE: 13,
//      SIGALRM: 14,
//      SIGTERM: 15,
//      SIGCHLD: 20,
//      SIGCONT: 19,
//      SIGSTOP: 17,
//      SIGTSTP: 18,
//      SIGTTIN: 21,
//      SIGTTOU: 22,
//      SIGURG: 16,
//      SIGXCPU: 24,
//      SIGXFSZ: 25,
//      SIGVTALRM: 26,
//      SIGPROF: 27,
//      SIGWINCH: 28,
//      SIGIO: 23,
//      SIGINFO: 29,
//      SIGSYS: 12 } }


// console.log(os.cpus());

// [ { model: 'Intel(R) Core(TM) i5-825 9U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 13814350, nice: 0, sys: 12104100, idle: 89819080, irq: 0 } },
//   { model: 'Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 1362060, nice: 0, sys: 1360200, idle: 112971360, irq: 0 } },
//   { model: 'Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 11518650, nice: 0, sys: 7753300, idle: 96424580, irq: 0 } },
//   { model: 'Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 1256250, nice: 0, sys: 1109660, idle: 113327620, irq: 0 } },
//   { model: 'Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 11670210, nice: 0, sys: 8127940, idle: 95898260, irq: 0 } },
//   { model: 'Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 1253050, nice: 0, sys: 1110280, idle: 113330090, irq: 0 } },
//   { model: 'Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 11124960, nice: 0, sys: 6890400, idle: 97680930, irq: 0 } },
//   { model: 'Intel(R) Core(TM) i5-8259U CPU @ 2.30GHz',
//     speed: 2300,
//     times: { user: 1242670, nice: 0, sys: 1083210, idle: 113367430, irq: 0 } } ]


// console.log(os.totalmem());

// 17179869184


// console.log(os.freemem());

// 178003968


/**
 * The os.platform() method returns a string identifying the operating system platform 
 * as set during compile time of Node.js.
 * Currently possible values are:
'aix'
'darwin'
'freebsd'
'linux'
'openbsd'
'sunos'
'win32'
 */

// console.log(os.platform());

// darwin


/**
 * The os.type() method returns a string identifying the operating system name 
 * as returned by uname(3). 
 * For example, 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
 */

// console.log(os.type());

// Darwin


console.log(os.userInfo());

// { uid: 501,
//   gid: 20,
//   username: 'wangxin',
//   homedir: '/Users/wangxin',
//   shell: '/bin/zsh' }
