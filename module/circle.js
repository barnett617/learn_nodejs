/**
 * Functions and objects are added to the root of a module by 
 * specifying additional properties on the special exports object.
 */

/**
 * Variables local to the module will be private, 
 * because the module is wrapped in a function by Node.js
 */
const { PI } = Math;
/**
 * The module circle.js has exported the functions area() and circumference()
 * @param {*} r 
 */
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;