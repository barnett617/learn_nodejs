const assert = require('assert');

function print(content) {
  console.log(content);
}

/**
 * assert.deepEqual(actual, expected[, message])
 */

const obj1 = {
  a: {
    b: 1
  }
};
const obj2 = {
  a: {
    b: 2
  }
};
const obj3 = {
  a: {
    b: 1
  }
};
const obj4 = Object.create(obj1);

// console.log(assert.deepEqual(obj1, obj1, 'not equals'));
// undefined

// console.log(assert.deepEqual(obj1, obj2));
// AssertionError [ERR_ASSERTION]: { a: { b: 1 } } deepEqual { a: { b: 2 } }

// console.log(assert.deepEqual(obj1, obj3));
// undefined

// console.log(assert.deepEqual(obj1, obj4));
// AssertionError [ERR_ASSERTION]: { a: { b: 1 } } deepEqual {}

// console.log(obj4);
// {}

/**
 * assert.deepEqual(actual, expected[, message])
 */

//  console.log(assert.deepEqual({a: 1}, {a: '1'}));
// undefined

// print(assert.deepStrictEqual({a: 1}, {a: '1'}));
// AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
// + expected - actual

//   {
// -   a: 1
// +   a: '1'
//   }

// The following objects don't have own properties
const date = new Date();
const object = {};
const fakeDate = {};

/**
 * Sets the prototype of a specified object o to  object proto or null. Returns the object o.
 * 把 fakeDate 的原型设置为 Date.prototype 并返回 fakeDate
 * @param o The object to change its prototype.
 * @param proto The value of the new prototype or null.
 */
Object.setPrototypeOf(fakeDate, Date.prototype);

// print(assert.deepEqual(object, fakeDate));
// undefined

// print(assert.deepStrictEqual(object, fakeDate));
// AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
// + expected - actual

// - {}
// + Date {}

// print(object);
// print(fakeDate);
// print(date);
// {}
// Date {}
// 2018-09-06T07:17:28.584Z

// print(object.prototype);
// print(fakeDate.prototype);
// print(Date.prototype)
// undefined
// undefined
// Date {}

// print(assert.deepEqual(date, fakeDate));
// undefined

// print(assert.deepStrictEqual(date, fakeDate));
// AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
// + expected - actual

// - 2018-09-06T07:15:50.646Z
// + Date {}

// print(assert.deepStrictEqual(new Number(1), new Number(2)));
// AssertionError [ERR_ASSERTION]: Input A expected to strictly deep-equal input B:
// + expected - actual

// - [Number: 1]
// + [Number: 2]

print(assert.deepStrictEqual(new String('foo'), Object('foo')));
// undefined
// because the object and the string are identical when unwrapped. 拆包后完全相同