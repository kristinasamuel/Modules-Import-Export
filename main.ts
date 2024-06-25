// Modules Import And Export 

import {myName} from "./first";
console.log(myName);  // import from first.ts

import {greet} from "./second";
console.log(greet('Noman'));   // import from second.ts

import {Array} from "./second";
console.log(Array); 

import {addition,subtract} from "./first";

let resultAdd = addition (40 ,20)  
console.log(resultAdd);


let resultSubtract = subtract(50,24)
console.log( resultSubtract);


