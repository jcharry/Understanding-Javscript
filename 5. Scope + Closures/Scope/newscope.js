function imAFunc() {
    var name = 'Britney Spears';    // We would think that name would ONLY exist while imAFunc() is executing, as soon as it finished, name should vanish

    var obj=  {
        logName: function() {
            console.log(name);
        },
        changeName: function(n) {
            name = n; 
        }
    };

    return obj;
}



var allMyMethods = imAFunc();

allMyMethods.logName();
allMyMethods.changeName('christina');
allMyMethods.logName();








//console.log(newFunc);



//var initialValue = 3;
//function multiplyByThree(inValue) {
    //return inValue*3;
//}

//var newVal = multiplyByThree(initialValue);
//console.log(initialValue);
//console.log(newVal);
