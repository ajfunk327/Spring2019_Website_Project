/*
In JavaScript there are two types of scope:

Local scope
Global scope
JavaScript has function scope: Each function creates a new scope.

Scope determines the accessibility (visibility) of these variables.

Variables defined inside a function are not accessible (visible) from outside the function.

var is a global scope value


let and const are local or considered "block" scope
*/



// Outputs: undefined
console.log(declaredLater);

var declaredLater = "Now it's defined!";

// Outputs: "Now it's defined!"
console.log(declaredLater);


//
var name = "Baggins";

(function () {
    // Outputs: "Original name was undefined"
    console.log("Original name was " + name);

   let  name = "Underhill";

    // Outputs: "New name is Underhill"
    console.log("New name is " + name);
})();


//function hoist
// Outputs: "Yes!"
isItHoisted();

function isItHoisted() {
    console.log("Yes!");
}

travelToMountDoom();
destroyTheRing();

function travelToMountDoom() { /* Traveling */ }
function destroyTheRing() { /* Destruction */ }



//function expression
// Outputs: "Definition hoisted!"
definitionHoisted();

// TypeError: undefined is not a function
definitionNotHoisted();

function definitionHoisted() {
    console.log("Definition hoisted!");
}

var definitionNotHoisted = function () {
    console.log("Definition not hoisted!");
};




