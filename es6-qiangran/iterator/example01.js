/**
 * Created by qr on 2015/12/15.
 */
'use strict';

let arr = ['zj', 'wh', 'fj'];
//console.log(arr[Symbol.iterator]);


 var iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());









//Symbol.iterator������һ�����ʽ������Symbol�����iterator���ԣ�����һ��Ԥ����õġ�����ΪSymbol������ֵ������Ҫ���ڷ�������

//��ES6�У���Щ���ݽṹԭ���߱�Iterator�ӿڣ��������飩��
// �������κδ����Ϳ��Ա�for...ofѭ����������Щ�Ͳ��У�������󣩡�
// ԭ�����ڣ���Щ���ݽṹԭ��������Symbol.iterator���ԣ�������ģ���
// ����һЩ���ݽṹû�С����ǲ�����Symbol.iterator���Ե����ݽṹ��
// �ͳ�Ϊ�����˱������ӿڡ���������ӿڣ��ͻ᷵��һ������������





