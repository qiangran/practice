'use strict';


//Symbol.for()����ÿ�ε��þͷ���һ���µ�Symbol���͵�ֵ�����ǻ��ȼ�������key�Ƿ��Ѿ����ڣ���������ڲŻ��½�һ��ֵ
let renrendai1 = Symbol.for('renrendai');
let renrendai2 = Symbol.for('renrendai');

console.log(renrendai1 === renrendai1);//true
console.log("*********************************************");
console.log("Symbol('renrendai') "+Symbol.keyFor(renrendai01));//����undefined
console.log(" Symbol.for('renrendai') "+Symbol.keyFor(renrendai1));//����һ���ѵǼǵ�Symbol����ֵ��key��

