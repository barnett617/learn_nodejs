// The specific operation of console.clear() can vary across operating systems and terminal types
// When stdout is a TTY, calling console.clear() will attempt to clear the TTY. 
// When stdout is not a TTY, this method does nothing

/**
 * For most Linux operating systems, console.clear() operates similarly to the clear shell command. 
 * On Windows, console.clear() will clear only the output in the current terminal viewport for the Node.js binary.
 */
console.log('balabala');
console.clear();