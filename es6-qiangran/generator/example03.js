/**
 * Created by qr on 2015/12/13. 异常相关
 */
'use strict';

function * fn(){
    let hg;
    try{
        console.log("我是在yield 前面执行的");
        hg = yield wh;  //wh 未定义
    }catch(e){
        console.log('hg error')
    }
    console.log(hg);

}

let g = fn();

g.next();


