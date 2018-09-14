Node.js will normally exit with a 0 status code when no more async operations are pending

### 未捕获异常
1 Uncaught Fatal Exception - There was an uncaught exception, and it was not handled by a domain or an 'uncaughtException' event handler.

### 未使用
2 - Unused (reserved by Bash for builtin misuse)

### 内部js解析错误（极少数出现）
3 Internal JavaScript Parse Error - The JavaScript source code internal in Node.js's bootstrapping process caused a parse error. This is extremely rare, and generally can only happen during development of Node.js itself.

### 内部js求值失败（极少数出现）
4 Internal JavaScript Evaluation Failure - The JavaScript source code internal in Node.js's bootstrapping process failed to return a function value when evaluated. This is extremely rare, and generally can only happen during development of Node.js itself.

### 严重错误
5 Fatal Error - There was a fatal unrecoverable error in V8. Typically a message will be printed to stderr with the prefix FATAL ERROR.

6 Non-function Internal Exception Handler - There was an uncaught exception, but the internal fatal exception handler function was somehow set to a non-function, and could not be called.


7 Internal Exception Handler Run-Time Failure - There was an uncaught exception, and the internal fatal exception handler function itself threw an error while attempting to handle it. This can happen, for example, if an 'uncaughtException' or domain.on('error') handler throws an error.


8 - Unused. In previous versions of Node.js, exit code 8 sometimes indicated an uncaught exception.


### 无效参数
9 - Invalid Argument - Either an unknown option was specified, or an option requiring a value was provided without a value.

### 内部js运行时失败（极少数出现）
10 Internal JavaScript Run-Time Failure - The JavaScript source code internal in Node.js's bootstrapping process threw an error when the bootstrapping function was called. This is extremely rare, and generally can only happen during development of Node.js itself.

### 无效调试参数（设置了inspect参数，但端口无效或不可达）
12 Invalid Debug Argument - The --inspect and/or --inspect-brk options were set, but the port number chosen was invalid or unavailable.


>128 Signal Exits - If Node.js receives a fatal signal such as SIGKILL or SIGHUP, then its exit code will be 128 plus the value of the signal code. This is a standard POSIX practice, since exit codes are defined to be 7-bit integers, and signal exits set the high-order bit, and then contain the value of the signal code. For example, signal SIGABRT has value 6, so the expected exit code will be 128 + 6, or 134.