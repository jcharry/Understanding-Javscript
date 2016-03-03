// During the global execution context creation, The engine automatically gives us
// a reference to the global object.  In the case of the browser, the global
// object is 'window' and is accessible by using the keyword 'this', or just window

var charlieBrown = 'oh brother';

// Same reference
window.charlieBrown = 'sad sack';
this.charlieBrown = 'had a great christmas though';

console.log(window);
console.log(this);

// Will also be added to the global 'window' object
function wooGirl() {
    console.log('woo!');
}


