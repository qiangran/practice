/**
 * Created by qr on 2015/12/15.
 */
'use strict';
let propKey = 'foo';

let obj = {

    [propKey]: true,
    ['a' + 'bc']: 123,
    ['h'+'ello']() {
        return 'hi';
    }
};
console.log(obj.foo);
