const inventory = require("./cars.cjs");

function carName(id){
    let result = inventory.filter((car)=>{
     if(car.id == id){
        return car;
     }
    })
    return result
}

module.exports = carName;