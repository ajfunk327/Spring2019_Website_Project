//multiple types of conversion and equality
/*
== && != tests differences in data types and can check equality while === && !== are used as variable testing
double equals is standard equality this checks only for coercion and loose equality.
triple is strict equality it checks for both type and value.
*/
//equality
let test1 = "hello world";
let test2 = "hello world";

console.log(test1 === test2);
//returns true

let val1 = 77;
let val2 = '77';

console.log(val1 === val2);
//returns false


//double equaly
console.log( val1 == val2 );
//returns true


console.log(false === 0);
//false


console.log(false == 0)
//true


//type comparison
alert( '2' > 1 );
 // true, string '2' becomes a number 2
alert( '01' == 1 ); 
// true, string '01' becomes a number 1



//comparison of null and undefined
alert( null === undefined ); // false

alert( null == undefined ); // true

//weird properties of null
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

//ToString
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

//ToNumber
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number



//Bad ToNumber
let age = Number("an arbitrary string instead of a number");
alert(age); // NaN, conversion failed

//boolean
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

