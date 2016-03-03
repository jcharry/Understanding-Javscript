var str = 'string';
console.log(typeof str);
str = 21;
console.log(typeof str);


var numb = 23;
console.log(typeof numb);


var obj = {
    name: 'jamie',
    age: 'ageless',
};
console.log(typeof obj);


var arr = ['blue', 'green', 'magenta'];
console.log(typeof arr);

var bool = true;
console.log(typeof bool);

function jackieChan() {
    console.log('he was in rush hour');
}
console.log(typeof jackieChan);



// Type Coercion
function isTrue(val) {
    if (val) {
        console.log('true');
    } else {
        console.log('false');
    }
}

str = 'a';
numb = 42;
bool = true;
obj = {};
//isTrue(str);
//isTrue(numb);
//isTrue(bool);
//isTrue(obj);
isTrue(null);


// == vs ===
if (0 === '0') {
    console.log(true);
} else {
    console.log(false);
}

// functions are types!
function func() {
    console.log('hi');
}
function secondFunc(f) {
    f();
}

secondFunc(func);









