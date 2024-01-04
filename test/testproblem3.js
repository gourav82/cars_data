const carSearch = require("../problem3");
const inventory = require("../cars.cjs")



function ArangedCar(){
     const arr = []
    for(let i = 0; i <inventory.length; i++){
    arr.push(inventory[i].car_make.toUpperCase());
    }
    arr.sort();
    console.log(arr);
}
ArangedCar();





// console.log(inventory);
// const result = inventory;
// const arr = []
// for(let i = 0; i <result.length; i++){
//       const carSort =result[i].car_make;
//   const newArr = {...carSort};
//        console.log(carSort);
//    }

