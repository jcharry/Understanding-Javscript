// When you execute a funciton, it takes over completely.  If a function is inside another function, the first function stops all together
// and waits for the second function to complete.
function firstFunc(number) {
    number--;

    if (number !== 0) {
        console.log(number);    // This prints out what we would expect - 9, 8,7,6,5,4,3,2,1
        firstFunc(number);
        console.log(number);    // This prints out something that initally looks weird - 1,2,3,4,5,6,7,8,9
                                // The reason has to do with how the call stack works: as soon as you call another function, 
                                // the current function halts while the other function does it's work
    }
}

firstFunc(10);
