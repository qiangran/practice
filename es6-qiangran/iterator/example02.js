/**
 * Created by qr on 2015/12/12.
 */
'use strict';
//Iterator接口的目的，就是为所有数据结构，提供了一种统一的访问机制，
// 即for...of循环（详见下文）。当使用for...of循环遍历某种数据结构时，
// 该循环会自动去寻找Iterator接口。
//for...of循环可以使用的范围包括数组、
// Set和Map结构、某些类似数组的对象（比如arguments对象、DOM NodeList对象）、Generator对象，以及字符串。
//与break、continue和return配合使用。
var obj = {//类数组对象
    length:2,
    '0':'abc',
    '1':'ddd'
};

obj[Symbol.iterator] = [][Symbol.iterator];
//凡是有Symbol.iterator接口的对象都可被 of 读取
for(let i of obj){
    console.log(i);
}



//与其他循环比较
//forEach循环，break命令或return命令都不能奏效
//for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
//for...in循环主要是为遍历对象而设计的，不适用于遍历数组。




