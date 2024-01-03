const inventory = require(".//cars.cjs");


function carSearch(id){
    const searchResult = inventory.filter((car)=>{
        if(car.id == id){
            return car
        }
    })
    return searchResult
}
module.exports = carSearch