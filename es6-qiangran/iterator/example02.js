/**
 * Created by qr on 2015/12/12.
 */
'use strict';
//Iterator�ӿڵ�Ŀ�ģ�����Ϊ�������ݽṹ���ṩ��һ��ͳһ�ķ��ʻ��ƣ�
// ��for...ofѭ����������ģ�����ʹ��for...ofѭ������ĳ�����ݽṹʱ��
// ��ѭ�����Զ�ȥѰ��Iterator�ӿڡ�
//for...ofѭ������ʹ�õķ�Χ�������顢
// Set��Map�ṹ��ĳЩ��������Ķ��󣨱���arguments����DOM NodeList���󣩡�Generator�����Լ��ַ�����
//��break��continue��return���ʹ�á�
var obj = {//���������
    length:2,
    '0':'abc',
    '1':'ddd'
};

obj[Symbol.iterator] = [][Symbol.iterator];
//������Symbol.iterator�ӿڵĶ��󶼿ɱ� of ��ȡ
for(let i of obj){
    console.log(i);
}



//������ѭ���Ƚ�
//forEachѭ����break�����return���������Ч
//for...inѭ�������������ּ�������������ֶ���ӵ�����������������ԭ�����ϵļ���
//for...inѭ����Ҫ��Ϊ�����������Ƶģ��������ڱ������顣




