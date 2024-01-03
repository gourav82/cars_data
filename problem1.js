const inventory = require("./cars.cjs");

function carData (id) {
   let result = inventory.filter((car) => {
    if(car.id === id) {
        return car;
    }
   })
   return result
}

module.exports = carData;