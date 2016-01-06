'use strict';
let name = Symbol('renrendai');

let company = {
  address:"Torch Building",
  [name]:'renrendai'
};

//console.log(Object.keys(company));

//for(let k in company){
//    console.log(k);
//}

//console.log(Object.getOwnPropertyNames(company));

let key = Object.getOwnPropertySymbols(company)[0];
console.log(company[key]);