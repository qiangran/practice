/**
 * Created by qr on 2015/12/13.
 */
'use strict';
var co = require('co');

function step1(num){
    return new Promise(function (resolve) {
        setTimeout(function () {
            if(num>3){
                resolve("wanghao");
            }else{
                throw new Error(" <3");
            }

        });
    });
}

function step2(name){
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name+" is  playing phone does not work!");
        });
    });
}


function * fn(){
    try{
        var name = yield step1(6);
        console.log(yield step2(name));
    }catch(err){
        console.log("generator函数执行错误"+err);
    }


}

var fnx = co.wrap(fn);//使用 co 的前提条件是，Generator 函数的 yield 命令后面，只能是 Thunk 函数或 Promise 对象。
fnx('xiaoMing');











//https://github.com/tj/co
