// We can make objects using a function
// This is called a function Constructor and when invoked with the 'new' keyword
// creates a new object using the constructor function as a template
function Person(name, favoriteThing) {
    this.name = name;
    this.favoriteThing = favoriteThing;
}

// We add the methods of this object to an object outside of the constructor function
// so we can add the methods to the prototype chain
// We do this because this will allow us to only create these methods ONCE, but use them 
// for ANY object created from the constructor template
var obj = {
    getFavoriteThing: function() {
        console.log(this.favoriteThing);
    },
    setFavoriteThing: function(thing) {
        this.favoriteThing = thing;
    },
};

// We set the prototpye our constructor to our object filled with methods
Person.prototype = obj;

// We can also add things to the prototype this way
// We're literally adding a property to the Prototype object
// and setting it equal to a funciton
Person.prototype.getFavoriteThing = function() {
    console.log(this);
    console.log(this.favoriteThing);
};


var me = new Person('jamie','Sad Troubadors');
var you = new Person('hive mind', 'fast internet speeds');

me.setFavoriteThing('lima beans');
me.getFavoriteThing();
you.getFavoriteThing();

