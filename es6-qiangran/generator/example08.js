/**
 * Created by qr on 2015/12/17. //async
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


 async function  fn(){
    try{
        var name = await  step1(6);
        console.log(await step2(name));
    }catch(err){
        console.log("async函数执行错误"+err);8
    }
}
fn();

/*
一比较就会发现，async函数就是将Generator函数的星号（*）替换成async，将yield替换成await，仅此而已。
async 函数对 Generator 函数的改进，体现在以下三点。

（1）内置执行器。Generator函数的执行必须靠执行器，所以才有了co模块，而async 函数自带执行器。也就是说，async函数的执行，
与普通函数一模一样，只要一行。

上面的代码调用了asyncReadFile函数，然后它就会自动执行，输出最后结果。这完全不像Generator函数，需要调用next方法，或者用co模块，才能得到真正执行，得到最后结果。

（2）更好的语义。async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

（3）更广的适用性。 co模块约定，yield命令后面只能是Thunk函数或Promise对象，而async函数的await命令后面，可以是Promise对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。

（4）返回值是Promise。async函数的返回值是Promise对象，这比Generator函数的返回值是Iterator对象方便多了。你可以用then方法指定下一步的操作。

进一步说，async函数完全可以看作多个异步操作，包装成的一个Promise对象，而await命令就是内部then命令的语法糖。


*/
