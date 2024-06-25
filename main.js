"use strict";
// Modules Import And Export 
Object.defineProperty(exports, "__esModule", { value: true });
var first_1 = require("./first");
console.log(first_1.myName); // import from first.ts
var second_1 = require("./second");
console.log((0, second_1.greet)('Noman')); // import from second.ts
var second_2 = require("./second");
console.log(second_2.Array);
var first_2 = require("./first");
var resultAdd = (0, first_2.addition)(40, 20);
console.log(resultAdd);
var resultSubtract = (0, first_2.subtract)(50, 24);
console.log(resultSubtract);
