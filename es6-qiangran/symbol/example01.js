/**
 * Created by qr on 2015/12/15.
 */
'use strict';
let renrendai01 = Symbol('renrendai');
let renrendai02 = Symbol('renrendai');
console.log(renrendai01 === renrendai01);
console.log(renrendai01 === renrendai02);//false
console.log("*********************************************");



//symbol �ڶ����е�д��
let getName = Symbol('renrendai');

let company = {
    address:'�廪�Ƽ�԰',
   [getName](){//�̶���д�� ���� company[getName] = 'XXXX'
       return 'renrendai';
   }
};

console.log(company[getName]());
