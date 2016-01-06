/**
 * Created by qr on 2015/12/13.
 */
'use strict';

// 2 默认的返回值是undefined，且不会抛出异常
// 3 只能在generator函数中使用
function * fn(_name){

    let name = yield _name;
    return name;
}

let v,it = fn('renrendai');
console.log(v =it.next());
console.log(it.next(v.value));
















// yield 默认始终返回 undefined

//console.log(it.next(v.value)); // 只能通过next方式赋值