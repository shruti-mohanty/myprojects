//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)



const bigNumber = 2364799378234566474n



// Reference (Non primitive types)

// Array,Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let Obj = {
    name:"Shruti",
    age: 20
}

const myFunction = function(){
   console.log("Hello world!");
}

console.log(typeof bigNumber);