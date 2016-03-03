// Object literal - We've seen this in p5
var myObj = {
    hi: 'hi',
    bye: 'bye',
    creepy: 'snakes',
    whatsCreepy: function() {
        console.log(this.creepy);
    }
};

console.log(myObj.hi);

// There's another way to access properties of an object
// instead of using a . and a property name, you use the angle brackets []
// and it looks like this object[property]
// the nice thing about doing it this way is I can pass a string into the angle
// brackets and it will find the property with the name that matches the string
// I can't pass a string to the dot operator - (i.e I can't do this: object.'propertyname'
var key = 'caring';

var creepy = {
    caring: 'caring is creepy',
    clowns: 'clowns are creepy',
};

// Here I access a property using a string saved into the variable 'key'
console.log(creepy[key]);

// The reason you'd want to do this is because you might get data from an input and want to 
// use that data to pull stuff out of an object.  Like you have an input field on a webpage, and you want to
// get the the info for a person if the user enters a name that matches.  You take the string directly from
// the input box and use the [] operator on an object to get the person

var people = {
    jamie: {
        name: 'jamie',
        age: 72,
        favoriteColor: 'Green-ish?',
    },
    sally: {
        name: 'sally',
        age: '91',
        favoriteColor: 'Confidently blue.',
    },
};

var name = 'jamie';
// like so
console.log(people[name]);

document.getElementById('getName').addEventListener('click', function() {
    var data = document.getElementById('nameInput').value;
    console.log(data);
    console.log(people[data]);
});




