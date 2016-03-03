console.log(this);  // Give me the global window

var obj = {
    // When used as a property, this still refers to the global object
    a: this,    // 'this' points to Window
    b: 'hi',
    c: 'bye',
    d: 'Einstein was okay, I guess',

    // when inside a method on an object, 'this' refers to the object itself
    e: function() {

        var self = this;

        console.log(this);  // 'this' points to the object we're inside

        function logThis() {
            //console.log(this);
            console.log(self);
        }
        logThis();

        function modifyC() {
            self.c = 'balderdash';
        }
    }
};

console.log(obj.a);
obj.e();

var a = 'apple';
