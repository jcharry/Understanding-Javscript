
console.log(globVar);
var globVar = 'global';

console.log(imAFunction);
console.log(imAnotherFunction);

// this actually creates an object called imAFunction.  This object is hoisted, so it exists lexically above
// it's declaration.  Other languages don't allow this.
function imAFunction() {
    var localVar = 'local';
    console.log(globVars);
    console.log(globVar);
}

var imAnotherFunction = function() {
    console.log('another function');
    console.log(globVars);
};




