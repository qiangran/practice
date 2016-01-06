/**
 * Created by qr on 2015/12/15.
 *
 * 参考 ：http://segmentfault.com/a/1190000003857670?_ea=396445
 */
'use strict';
//Array.from
// 方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）
// 和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
// 即 任何有length属性的对象，都可以通过Array.from方法转为数组。
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

console.log(arr2);
console.log("*****************************************************");
/**
 * 1 querySelectorAll方法返回的是一个类似数组的对象，
 * 只有将这个对象转为真正的数组，才能使用forEach方法。
 * 2 参数 arguments
 * **/

//Array.of方法用于将一组值，转换为数组。弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
console.log(Array() );// []
console.log(Array(3)); // [, , ,]//此时的3代表的是数组的长度
console.log(Array(3, 11, 8) );// [3, 11, 8]
//Array.of基本上可以用来替代Array()或new Array()

console.log("*****************************************************");
console.log(Array.of());// []
console.log(Array.of(undefined)); // [undefined]
console.log(Array.of(1)); // [1]
console.log(Array.of(1, 2)); // [1, 2]


