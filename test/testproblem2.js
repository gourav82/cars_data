const carName = require("../problem2");
const inventory = require("../cars.cjs")

console.log(inventory.length)
//  console.log(inventory[inventory.length-1])
 
 const Result2 = inventory[inventory.length-1];

console.log(Array.isArray(Result2));

 console.log( `Car ${Result2.id}  is a ${Result2.car_make} ${Result2.car_model}`);
