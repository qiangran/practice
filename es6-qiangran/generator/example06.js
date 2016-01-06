/**
 * Created by qr on 2015/12/13.  promise and generator
 */
'use strict';
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


function fn_promise(){
    step1(8)
        .then(function (v) {
            return   step2(v)
        })
        .then(msg => console.log(msg))
        .catch(err => console.log(err))

}
//fn_promise();





function * fn(){
    try{
        var name = yield step1(5);
        console.log(yield step2(name));
    }catch(err){
        console.log("generatorº¯ÊýÖ´ÐÐ´íÎó"+err);
    }


}
let ge = fn();

console.log(ge.next());


function exec(ge,value){
    let result = ge.next(value);//{ value: Promise { <pending> }, done: false }
    if(!result.done){
        if(result.value instanceof Promise){
            result.value.then(function (v) {
                exec(ge,v);
            });
        }else{
            exec(ge,result.value);
        }
    }
}

exec(ge);
