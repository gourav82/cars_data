const carName = require("../problem2");
const inventory = require("../cars.cjs")

 const Result2 = inventory[inventory.length-1];

 console.log( `Car ${Result2.id}  is a ${Result2.car_make} ${Result2.car_model}`);
