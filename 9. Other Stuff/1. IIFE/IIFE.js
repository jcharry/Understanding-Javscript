counter = 0;
// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
(function() {
    // ALL MY CODE GOES HERE
    
    var something = 'a private thing';

    function showSomething() {
        console.log(something);
    }

    var objToExpose = {
        showSomething: function() {
            console.log(something);
        },
        setSomething: function (newThing) {
            something = newThing;
        },
    };

    window.jQuery = window.$ = objToExpose;
}());

jQuery.setSomething('something else');
jQuery.showSomething();

(function(global) {

    function MyCustomObjectThatNoOneElseHasNamedThisWay() {

        this.hi = 'hi';
    }

    MyCustomObjectThatNoOneElseHasNamedThisWay.prototype = {
        printHi: function() {
            console.log(this.hi);
        }
    };

    // Expose our object to the global obj
    global.OurCustomObject = MyCustomObjectThatNoOneElseHasNamedThisWay;
    console.log(global.OurCustomObject);

}(this));

var myObj = new OurCustomObject();
myObj.printHi();
