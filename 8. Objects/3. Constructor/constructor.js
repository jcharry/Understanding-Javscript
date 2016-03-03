// Function constructors mimic classes
function Creepy(name) {

    // Because 'this' can be slippery (i.e. we dont' always know exactly what it refers to),
    // we capture a reference to it when we know it points to the object itself
    // Then we can use 'self' and not have to worry about the wierd behavior of 'this'
    var self = this;

    console.log('hi');

    this.property = 'im a property'; 
    this.name = name;
    this.log = function() {
        console.log(self.property);

        function logThis() {
            console.log(self);
        }
        logThis();
    };
}

var creepy = new Creepy('spider');
var creepy2 = new Creepy('caring');
creepy.log();
creepy2.property = 'creepy property';
creepy2.log();



// There's actually a more natural way to create objects in JS using something called Object.create()
// it essentially does the same as a function constructor but you can use an object literal as the template,
// rather than a function

// Template object
var baseObj = {
    a: 'hi',
    b: 'bye',
};

// We're going to make a few objects and put them into an array
var arr = [];
for (var i = 0; i < 5; i++) {
    // We use Object.create() and give it our object template
    // it return a new instance of an object with the properties defined in our template
    var obj = Object.create(baseObj);
    obj.randNumber = Math.random();
    arr.push(obj); 
}

console.log(arr);

