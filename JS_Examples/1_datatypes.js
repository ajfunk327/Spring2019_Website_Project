/*
seven base data types 
*/

/*
data types when declared are type cast to whatever is assigned to them
*/

//Numbers
let whole = 1234;
let deci = 12.345;


//Strings
let str = "hello";
let str2 = 'single quotes are okay too'

    let embed = "variables"
let phrase = `can embed ${embed}`
//prints: can embed variables


//bool 
let possibletrue = true;
let possiblefalse = false;

alert(possiblefalse);  //outputs false
alert(possibletrue);  //outputs true

//null 
let age = null;
//represents a empty value


//undefined
let x = undefined;
// represents that a value has not been assigned
// this is the default value that is assigned
// before any other assignments


//symbols are unique identifiers
const symbol1 = Symbol('foo');

console.log(Symbol1.toString());  
//output Symbol('foo');

//objects
//objects are special container classes
let houston = {
    sex: "male",
    cute: true,
    age: 12,
    identifies_sexally_as_a_fish: undefined,
    net_worth: null,
}

//can be accesssed by
console.log(houston.identifies_sexally_as_a_fish);
//logs undefined

//also can be accessed by
console.log(houston[age]);

