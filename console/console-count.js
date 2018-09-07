// It works only in REPL

console.count();
// default: 1
// undefined
console.count('default');
// default: 2
// undefined
console.count('abc');
// abc: 1
// undefined
console.count('xyz');
// xyz: 1
// undefined
console.count('abc');
// abc: 2
// undefined
console.count();
// default: 3
// undefined