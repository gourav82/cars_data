const inventory = require("./cars.cjs");


function ArangedCar() {
    const CarYear = [];
    for (let i = 0; i < inventory.length; i++) {

        if (inventory[i].car_year < 2000) {
            CarYear.push(inventory[i].car_year);
        }
    }
    console.log(CarYear);
    // CarYear.sort();
    // console.log(CarYear);
}
module.exports = ArangedCar