/**
 * Created by qr on 2015/12/15.
 */
'use strict';

//Object.is用来比较两个值是否严格相等。它与严格比较运算符（===）的行为基本一致。
//等同于 ===
console.log(Object.is({},{}) , {} === {} );

//不同之处只有两个：一是+0不等于-0，二是NaN等于自身

console.log(Object.is(+0,-0) , +0 === -0);
console.log(Object.is(NaN,NaN) , NaN === NaN);





