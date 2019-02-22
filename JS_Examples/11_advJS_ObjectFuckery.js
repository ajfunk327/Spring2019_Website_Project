//empy obj
let rect = {};          // creates an empty object
rect.width = 20;
rect.height = 10;
alert(rect.width);      // => 20
alert(rect.height);     // => 10


//inside obj
let rect = { width: 20, height: 10 };
alert(rect.width);      // => 20
alert(rect.height);     // => 10

//modify
let rect = { width: 20, height: 10 };
rect.width = 30;        // => modify value 
alert(rect.width);      // => 30
alert(rect.height);     // => 10


//functions in objects
var rect = { width: 20, height: 10 };
// add new object
rect.color = { red: 0, green: 255, blue: 128 }; 
// add new method
rect.getArea = function() {                    
    return this.width * this.height;
};
alert(rect.color.red);             // => 0
alert(rect.color.green);           // => 255
alert(rect.color.blue);            // => 128
alert(rect.getArea());             // => 200


//accessing
var rect = { width: 20, height: 10 };
alert(rect.width);             // => 20 (dot notation)
alert(rect["width"]);          // => 20 (bracket notation)



//delete
var circle = { radius: 8 };
alert(circle.radius);             // => 8
alert(delete circle.radius);      // => true
alert(circle.radius);             // => undefined

//assigning new values equal to an object
function Task(){
    this.message = "Learning JS";
}
var t = new Task();                  // includes new   
alert(t.message);                    // => Learning JS
alert(window.message === undefined); // => true
var u = Task();                      // new is omitted!
alert(u.message);                    // => error (not displayed in run)
alert(window.message === undefined); // => false
alert(window.message);               // => Learning JS



//this context
function Circle(radius) {                    
    this.radius = radius;
}
Circle.prototype.getRadius = function() {
    return this.radius;
}
var smallCircle = new Circle(5);
alert(smallCircle.getRadius());    // => 5
var largeCircle = new Circle(100);
alert(largeCircle.getRadius());    // => 100



//assignment of prototypes
var circle = {
    radius: 10,
    getRadius: function() {
        alert(this === circle);
        alert(this.radius);
    }
};
circle.getRadius();                 // => true, 10
var anotherCircle = {
    radius: 12
};
anotherCircle.getRadius = circle.getRadius;
anotherCircle.getRadius();         // => false, 12


//simle prototypes
circle.prototype.powerfunction = function () {
    let newrad = Math.pow(this.radius,3);
    console.log(newrad);
}

circle.prototype.dimensions = 3;



//