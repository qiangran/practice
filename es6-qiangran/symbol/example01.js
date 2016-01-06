/**
 * Created by qr on 2015/12/15.
 */
'use strict';
let renrendai01 = Symbol('renrendai');
let renrendai02 = Symbol('renrendai');
console.log(renrendai01 === renrendai01);
console.log(renrendai01 === renrendai02);//false
console.log("*********************************************");



//symbol 在对象中的写法
let getName = Symbol('renrendai');

let company = {
    address:'清华科技园',
   [getName](){//固定的写法 或者 company[getName] = 'XXXX'
       return 'renrendai';
   }
};

console.log(company[getName]());
