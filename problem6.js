const inventory = require("./cars.cjs");



function BMWcar() {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].car_make === "BMW" || inventory[i].car_make === "Audi") {
            console.log(`car Id ${inventory[i].id} car name  ${inventory[i].car_make} purchase year ${inventory[i].car_year} Model Mo.  ${inventory[i].car_model}`);
        }
    }
}
module.exports = BMWcar