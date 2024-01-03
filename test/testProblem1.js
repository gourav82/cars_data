const carData = require("../problem1");
// import { carDetail } from "../problem1";
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"
let result = carData(33); //[{}]

result = result[0]; //{}
console.log( `Car ${result.id}  is a ${result.car_year} ${result.car_make} ${result.car_model}`);
