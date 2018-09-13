/**
 * The module.exports property can be assigned a new value (such as a function or object).
 */
module.exports = class Square {
  constructor(width) {
    this.width = width;
  }

  area() {
    return this.width ** 2;
  }
};