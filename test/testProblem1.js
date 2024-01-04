const carData = require("../problem1");


let result = carData(33); //[{}]

result = result[0]; //{}
console.log( `Car ${result.id}  is a ${result.car_year} ${result.car_make} ${result.car_model}`);
