// Functional Programming

// pure function, returns same output
var double = (value) => value * 2;

// not pure function
var percentValue = 5;
var calculateTax = (value) => {
    return value/100 * 100(100 + percentValue)
}
// relies on percentValue variable from outside environment
// rewritten by removing the environmental dependency

var calculateTax = (value, percentValue) => {
    return value/100 + (100 + percentValue)
}

// Cachable
var longRunningFunction = (ip) => {  }//long running tasks and return
var longRunningFnBookKeeper = { 2 : 3, 4 : 5 }; // cache previous

longRunningFnBookKeeper.hasOwnProperty(ip) ?
longRunningFnBookKeeper[ip] :
longRunningFnBookKeeper[ip] = longRunningFunction(ip)


// simple function
var simpleFn = () => 'Simple Function'

// multiple statement functions
var simpleFn = () => {
    let value = 'Simple function';
    return value;
}

// identity
var identity = (value) => value

// forEach function
const forEach = (array, fn) => {
    let i;
    for(i = 0; i < array.length; i++)
        fn(array[i])
}

export default forEach  // exports forEach

// importing forEach function
var array = [1, 2, 3];
forEach(array,(data) => console.log(data));

// tellType function
var tellType = (arg) =>{
    console.log(typeof arg);
}

// 

// execute function if typeof arg is function
var tellType = (arg) => {
    if(typeof arg === 'function')
        arg();
    else
        console.log('The passed data is a ' + arg);
}


