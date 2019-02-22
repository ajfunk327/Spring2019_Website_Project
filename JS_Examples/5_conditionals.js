//if statments
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

//equality check to if
let cond = (year == 2015); // equality evaluates to true or false
if (cond) {
 // ...
}


//if else]

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}



//else if
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}


//ternary operator
let result = condition ? value1 : value2;


let accessAllowed = (age > 18) ? true : false;


//multiple ?
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );



//if replacement
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');



   //truthy
   if (true)
   if ({})
   if ([])
   if (42)
   if ("foo")
   if (new Date())
   if (-42)
   if (3.14)
   if (-3.14)
   if (Infinity)
   if (-Infinity)



   //falsy
   if (false)
   if (null)
   if (undefined)
   if (0)
   if (NaN)
   if ('')
   if ("")
   if (``)
   if (document.all)


// or
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
  }

  alert( 1 || 0 ); // 1 (1 is truthy)

alert( true || 'no matter what' ); // (true is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)

alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); 
// 0 (all falsy, returns the last value)

//&&
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false



// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


alert( 1 && 2 && null && 3 ); // null


//not
alert( !true ); // false
alert( !0 ); // true

alert( !!"non-empty string" ); // true
alert( !!null ); // false

//loops
while (condition) {
    // code
    // so-called "loop body"
  }

  for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
  }

let nums = [1,2,3,4]
for(let number of num){
    console.log(number);
}

let str = 'abcde';
for(let char of str){
    console.log(char.toUpperCase().repeat(3));
}

//AAA
//BBB
//CCC

let todd = {
    sex: 'never',
    age: '9',
    is_a_magical_girl_anime_trope: true,
    kiss_his_body_pillow: 1
}

for (let key in todd){
console.log(`${key} --> ${todd[key]}`);
}

//sex --> never
//age --> 9


//switch

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}

//grouping cases
let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3:                    // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}