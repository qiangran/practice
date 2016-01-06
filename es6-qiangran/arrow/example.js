/**
 * Created by qr on 2015/12/12.
 */
'use strict';

var fives = [];
// Statement bodies
[5,6,7].forEach(v => {
    if (v % 5 === 0)
        fives.push(v);
});

// Lexical this
var bob = {
    _name: "Bob",
    _friends: fives,
    printFriends() {
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    },

    printFriends_old(){
        this._friends.forEach(function(index){

            console.log(this._name + " knows " +index);
        });


    },

    setTimeOutTest(){
           setTimeout( ()=>
                 console.log("settimeout的this指向"+this._name)
         );
    }
};

bob.setTimeOutTest();


