function areYouLucky() {
    var foo = Math.round(Math.random() * 100);
     
    if (foo > 50) {
        alert("You are lucky!");
    } else {
        alert("You are not lucky!");  
    }
}
 
// calling this function!
areYouLucky();

(function() {
    var shout = "I AM ALIVE!!!";
    alert(shout);
})();


(function(a, b) {
    /* code */
})(arg1, arg2);






let model = ( () => {
/*
gathers data for models
*/

let a = 3;
return{

    houston: () => {
        console.log(a);
    }
}
})();


let controller = ( (model) => {
/*
edits the view

gathers data from model
*/

return{

}
})(model);


let view = ( (controller,model) => {
/*
displays

*/
})(controller, model);