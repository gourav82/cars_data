const inventory = require("./cars.cjs");


function ArangedCar(){
    const arrCar = []
   for(let i = 0; i <inventory.length; i++){
   arrCar.push(inventory[i].car_year);
   }
   arrCar.sort();
   console.log(arrCar);
}
module.exports = ArangedCar