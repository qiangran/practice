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
        console.log("generator����ִ�д���"+err);
    }


}

var fnx = co.wrap(fn);//ʹ�� co ��ǰ�������ǣ�Generator ������ yield ������棬ֻ���� Thunk ������ Promise ����
fnx('xiaoMing');











//https://github.com/tj/co
