'use strict';


//Symbol.for()不会每次调用就返回一个新的Symbol类型的值，而是会先检查给定的key是否已经存在，如果不存在才会新建一个值
let renrendai1 = Symbol.for('renrendai');
let renrendai2 = Symbol.for('renrendai');

console.log(renrendai1 === renrendai1);//true
console.log("*********************************************");
console.log("Symbol('renrendai') "+Symbol.keyFor(renrendai01));//返回undefined
console.log(" Symbol.for('renrendai') "+Symbol.keyFor(renrendai1));//返回一个已登记的Symbol类型值的key。

