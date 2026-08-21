let apples : number = 5;
apples = 10;

let speed : string = "fast";


let haveName : boolean = true;

let nothingMuch : null = null;

let nothing : undefined = undefined;


//Built in objects
let now : Date = new Date();


// Arrays
let colors : string[] = ["red", "green", "blue"];
let myNumbers : number[] = [1 ,2, 3, 4];
let truths : boolean[] = [ true, true, false]

// Classes
class Car {

}

let car : Car = new Car();


// Object Literals
let point: {x : number, y : number} = {
    x: 10,
    y: 20
}

//Functions
const LogNumber: (i : number) => void = (i: number) => {
    console.log(i);
}

// When to use annotations
//1) Function returns the "any" type
