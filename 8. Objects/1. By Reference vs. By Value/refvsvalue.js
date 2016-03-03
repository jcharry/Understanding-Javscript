var a = 5;
var b = a;  // Passed by value - made a copy of the value and copied it into a new spot in memory
b = 4;

console.log(a);
console.log(b);

var obj = {
    a: 'hi',
    b: 'bye',
};

var newObj = obj;   // Passed by Reference - meaning it's pointing to the same spot in memory, so both variables point to the exact same object
newObj.a = 'bye';

// See how both objects had their 'a' property updated?  Because both variables point to the EXACT same object
console.log(obj);
console.log(newObj);


var arr = [];
for (var i = 0; i < 10; i++) {
    var newObj = obj;
    arr.push(obj);
}

arr[2].b = 'adios';
console.log(arr);
