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
        console.log("async����ִ�д���"+err);8
    }
}
fn();

/*
һ�ȽϾͻᷢ�֣�async�������ǽ�Generator�������Ǻţ�*���滻��async����yield�滻��await�����˶��ѡ�
async ������ Generator �����ĸĽ����������������㡣

��1������ִ������Generator������ִ�б��뿿ִ���������Բ�����coģ�飬��async �����Դ�ִ������Ҳ����˵��async������ִ�У�
����ͨ����һģһ����ֻҪһ�С�

����Ĵ��������asyncReadFile������Ȼ�����ͻ��Զ�ִ�У���������������ȫ����Generator��������Ҫ����next������������coģ�飬���ܵõ�����ִ�У��õ��������

��2�����õ����塣async��await�������Ǻź�yield�����������ˡ�async��ʾ���������첽������await��ʾ�����ں���ı��ʽ��Ҫ�ȴ������

��3������������ԡ� coģ��Լ����yield�������ֻ����Thunk������Promise���󣬶�async������await������棬������Promise�����ԭʼ���͵�ֵ����ֵ���ַ����Ͳ���ֵ������ʱ��ͬ��ͬ����������

��4������ֵ��Promise��async�����ķ���ֵ��Promise�������Generator�����ķ���ֵ��Iterator���󷽱���ˡ��������then����ָ����һ���Ĳ�����

��һ��˵��async������ȫ���Կ�������첽��������װ�ɵ�һ��Promise���󣬶�await��������ڲ�then������﷨�ǡ�


*/
