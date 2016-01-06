/**
 * Created by qr on 2015/12/15.
 */

'use strict';

var obj = {};
var obj2 = Object.assign(obj, {name: 'renrendai',age:3}, {age: 5},{name:"renrendai  is  2"});

console.log(obj === obj2, obj);


 //用处 可参见wsdk.js