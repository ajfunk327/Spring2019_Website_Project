let fruits = ["banana","orange","apple","grape"];

fruits[0] ;  //banan

fruits.toString();
//Banana,Orange,Apple,Mango


fruits.join('*');
//Banana * Orange * Apple * Mango



//adding items
let myarray = [1,2,3,4,5];
let myarray = ['john','jill','jake'];

Myarray[1] = 9 //changes 2 to 9
Mynamearray[mynamearray.length] = 'mary' //puts a new element at the end of the array
Myarray.push (6); //adds an element to back of array
myarray.unshift(0); //adds element to front of array
myarray.pop(); //pops off element from back of array
myarray.shift(); //shifts off front element of array


// combine two arrays using concat
const myArray1 = [1,2,3,4,5]
const myArray2 = [6,7,8,9,10];
const myArray3 = myArray1.concat(myArray2);


delete fruits[0] 
//big nono changes banana to undefined



//splice
fruits.splice(2,0,"lemon",'kiwi');
//2 what element
//0 how many removable elements
//items to add

//fruits = ["banana", "orange", "lemon", "apple, "mango]
fruits.slice(3);

//"apple","mango"


//["banana", "orange", "apple", "mango"]
fruits.sort();

//apple,banana, mango, orange

fruits.reverse();
//reverses all eelments

//sort ascending
let points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});


//sort descending
points.sort(function(a, b){return b - a});


//sort random
points.sort(function(a, b){return 0.5 - Math.random()});

let val = Math.max.apply(null, points);
//returns largest array value


let min = Math.min.apply(null, points);
//returns minimum


//arry objects
let cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

  cars.sort(function(a, b){return a.year - b.year});
  
//array iteration

//foreach
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value; 
}



//map
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value * 2;
  }


function keymap(arr) {
     let newobject = {};
    for (let val of arr){
    newobject[val] = (newobject[val] || 0) +1;
    }
    return newobject;
    }


// dates
let d = new Date();
//JavaScript Stores Dates as Milliseconds
let dd = new Date(0);

