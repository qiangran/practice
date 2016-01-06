'use strict';
console.log("~~~~~~~~~~~~~~~~~~~~~~~private method~~~~~~~~~~~~~~~~~~~~~~~~~~");
let getName = Symbol('getName');
class Company {
    [getName]() {
        return 'renrendai';
    }

    sayName() {
        console.log(this[getName]()+" Technology ");//getName方法只能在此运用
    }

};


let company = new Company();
company.sayName();

company[getName]();

console.log("~~~~~~~~~~~~~~~~~~~~~~create unique const~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const COLOR_RED    = Symbol();
const COLOR_GREEN  = Symbol();

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return "i like red!!";
        case COLOR_GREEN:
            return "i like green!!";
        default:
            throw new Error('Undefined color');
    }
}
console.log(getComplement(COLOR_RED));
