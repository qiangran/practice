/**
 * Created by qr on 2015/12/13.
 */
'use strict';

function *fn(){
    console.log(" i'am generator");
    console.log(" i'am generator222");
}
//let it = fn();
//console.log(it.next());//关注 next返回的结果

// 1 yiled 可以把函数分成N段执行，
function * fn(){

    yield 1;
    yield 2;
    yield 3;
    return 4;
}

let it = fn();
console.log(it.next());//关注 next返回的结果
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


/*

for(let v of it){
    console.log(v);
}*/
