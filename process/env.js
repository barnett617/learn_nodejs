/**
 * The process.env property returns an object containing the user environment
 * 返回一个用户环境参数的对象
 */
// console.log(process.env);

// { __CF_USER_TEXT_ENCODING: '0x1F5:0x19:0x34',
//   TMPDIR: '/var/folders/n6/l1wzw0tx4h73m6p1nz8mjr900000gn/T/',
//   HOME: '/Users/wangxin',
//   SHELL: '/bin/zsh',
//   Apple_PubSub_Socket_Render: '/private/tmp/com.apple.launchd.3wJ0IdQDok/Render',
//   SSH_AUTH_SOCK: '/private/tmp/com.apple.launchd.exX718hdzv/Listeners',
//   PATH: '/Users/wangxin/.nvm/versions/node/v10.0.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/wangxin/anaconda3/bin:/usr/local/mysql/bin:/Users/wangxin/anaconda3/bin:/usr/local/mysql/bin',
//   LOGNAME: 'wangxin',
//   XPC_SERVICE_NAME: '0',
//   COMMAND_MODE: 'unix2003',
//   USER: 'wangxin',
//   XPC_FLAGS: '0x0',
//   MANPATH: '/Users/wangxin/.nvm/versions/node/v10.0.0/share/man:/usr/share/man:/usr/local/share/man:/Users/wangxin/anaconda3/share/man:/usr/local/mysql/man:/Library/Developer/CommandLineTools/usr/share/man',
//   TERM_PROGRAM: 'vscode',
//   NVM_CD_FLAGS: '-q',
//   TERM: 'xterm-256color',
//   NVM_PATH: '/Users/wangxin/.nvm/versions/node/v10.0.0/lib/node',
//   TERM_PROGRAM_VERSION: '1.27.1',
//   TERM_SESSION_ID: 'w0t0p1:7026EC2E-82C9-494E-AA4A-6561A3542831',
//   ZSH: '/Users/wangxin/.oh-my-zsh',
//   NVM_DIR: '/Users/wangxin/.nvm',
//   PAGER: 'less',
//   LSCOLORS: 'Gxfxcxdxbxegedabagacad',
//   NVM_NODEJS_ORG_MIRROR: 'https://nodejs.org/dist',
//   PWD: '/Users/wangxin/code/github/node/learn_nodejs',
//   LANG: 'zh_CN.UTF-8',
//   ITERM_PROFILE: 'Default',
//   SHLVL: '1',
//   COLORFGBG: '7;0',
//   ITERM_SESSION_ID: 'w0t0p1:7026EC2E-82C9-494E-AA4A-6561A3542831',
//   LESS: '-R',
//   LC_CTYPE: 'zh_CN.UTF-8',
//   NVM_BIN: '/Users/wangxin/.nvm/versions/node/v10.0.0/bin',
//   NVM_IOJS_ORG_MIRROR: 'https://iojs.org/dist',
//   COLORTERM: 'truecolor',
//   OLDPWD: '/private',
//   _: '/Users/wangxin/.nvm/versions/node/v10.0.0/bin/node' }

/**
 * It is possible to modify this object, 
 * but such modifications will not be reflected outside the Node.js process. 
 * In other words, the following example would not work
 * 这个对象可以修改，但是修改不会在node进程之外有影响
 */
process.env.foo = 'bar';
// console.log(process.env.foo);
// bar

/**
 * Use delete to delete a property from process.env.
 */
process.env.TEST = 1;
delete process.env.TEST;
console.log(process.env.TEST);
// undefined

// Windows上的环境变量大小写不敏感