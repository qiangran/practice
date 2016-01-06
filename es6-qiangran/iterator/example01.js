/**
 * Created by qr on 2015/12/15.
 */
'use strict';

let arr = ['zj', 'wh', 'fj'];
//console.log(arr[Symbol.iterator]);


 var iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());









//Symbol.iterator本身是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的、类型为Symbol的特殊值，所以要放在方括号内

//在ES6中，有些数据结构原生具备Iterator接口（比如数组），
// 即不用任何处理，就可以被for...of循环遍历，有些就不行（比如对象）。
// 原因在于，这些数据结构原生部署了Symbol.iterator属性（详见下文），
// 另外一些数据结构没有。凡是部署了Symbol.iterator属性的数据结构，
// 就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。





