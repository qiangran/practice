/**
 * Created by qr on 2015/12/15.
 *
 * �ο� ��http://segmentfault.com/a/1190000003857670?_ea=396445
 */
'use strict';
//Array.from
// �������ڽ��������תΪ���������飺��������Ķ���array-like object��
// �Ϳɱ�����iterable���Ķ��󣨰���ES6���������ݽṹSet��Map����
// �� �κ���length���ԵĶ��󣬶�����ͨ��Array.from����תΪ���顣
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};
// ES5��д��
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// ES6��д��
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

console.log(arr2);
console.log("*****************************************************");
/**
 * 1 querySelectorAll�������ص���һ����������Ķ���
 * ֻ�н��������תΪ���������飬����ʹ��forEach������
 * 2 ���� arguments
 * **/

//Array.of�������ڽ�һ��ֵ��ת��Ϊ���顣�ֲ����鹹�캯��Array()�Ĳ��㡣��Ϊ���������Ĳ�ͬ���ᵼ��Array()����Ϊ�в��졣
console.log(Array() );// []
console.log(Array(3)); // [, , ,]//��ʱ��3�����������ĳ���
console.log(Array(3, 11, 8) );// [3, 11, 8]
//Array.of�����Ͽ����������Array()��new Array()

console.log("*****************************************************");
console.log(Array.of());// []
console.log(Array.of(undefined)); // [undefined]
console.log(Array.of(1)); // [1]
console.log(Array.of(1, 2)); // [1, 2]


