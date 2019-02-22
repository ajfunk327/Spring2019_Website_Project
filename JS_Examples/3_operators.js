//setting values and changing to a new value
let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied




//string concatentaiton binary +
let s = "my" + "string";
alert(s); // mystring


alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"


alert(2 + 2 + '1' ); // "41" and not "221"


alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3


//numeric conversion with unary +
// No effect on numbers
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

alert( apples + oranges );
 // "23", the binary plus concatenates strings

/*
16	unary plus	+
16	unary negation	-
14	multiplication	*
14	division	/
13	addition	+
13	subtraction	-
3	assignment	=
*/

//assignment
let x = 2 * 2 + 1;

alert( x ); // 5


let a, b, c;
a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4


//modulus
alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2
alert( 8 % 3 ); // 2 is a remainder of 8 divided by 3
alert( 6 % 3 ); // 0 is a remainder of 6 divided by 3


//exponentiation
alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)

alert( 4 ** (1/2) ); 
// 2 (power of 1/2 is the same as a square root, that's maths)
alert( 8 ** (1/3) ); 
// 2 (power of 1/3 is the same as a cubic root)



//increment decrement
let counter = 2;
counter--;      // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1


let counter = 2;
counter++;      // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3



//bitwise
/*
there are bitwise but we arent gonna cover them right nowAND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )
*/


//commas
// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
  //mycode
   }


