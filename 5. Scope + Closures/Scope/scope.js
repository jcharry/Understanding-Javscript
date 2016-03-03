function hi() {
    var imALocalVar = 'localVar';

    function bye() {
        var imAnotherLocalVar;
    }
}

hi();

// Closures
function imAFunc() {
    var name = 'Britney Spears';    // We would think that name would ONLY exist while imAFunc() is executing, as soon as it finished, name should vanish

    function logName() {
        console.log(name);
    }

    logName();

    //return logName;
}

var myFunc = imAFunc();
myFunc();

// Why closures!?
// Another example - private variable
function add() {
    var counter = 0;

    function incrementCounter() {
        counter++;
        console.log(counter);
    }

    return incrementCounter;
}

var incrementer = add();
incrementer();
incrementer();
incrementer();



function logCoolThings(thing) {
    console.log(thing);
}

var coolThings = ['leather jackets', 'pipes', 'perfectly circular glasses'];
function beCool() {
    for (var i = 0; i < coolThings.length; i++) {
        var coolThing = coolThings[i];

        logCoolThings(coolThing);
    }
}
beCool();

//console.log(imALocalVar);  // Not accessible outside of our function



// Interesting Example from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
//function showHelp(help) {
  //document.getElementById('help').innerHTML = help;
//}

//function setupHelp() {
  //var helpText = [
      //{'id': 'email', 'help': 'Your e-mail address'},
      //{'id': 'name', 'help': 'Your full name'},
      //{'id': 'age', 'help': 'Your age (you must be over 16)'}
    //];

  //for (var i = 0; i < helpText.length; i++) {
    //var item = helpText[i];
    //document.getElementById(item.id).onfocus = function() {
      //showHelp(item.help);
    //}
  //}
//}

//setupHelp();
