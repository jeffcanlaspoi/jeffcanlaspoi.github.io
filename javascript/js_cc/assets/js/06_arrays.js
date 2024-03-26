
var arrItems = [
    "Pants", "Shirts", "Undies", "Shoes", "Bags",
    "Slippers", "Compressors", "Socks", "Purse"
];

var x = 0;
while(x < arrItems.length) {
    // console.log(`${x + 1} : ${arrItems[x]}`);
    x++;
}

var arrFruits = ["Apple", "Mango", "Strawberry", "Avocado"];

var [item_0] = arrFruits;

//Array Destructure
// var [apple,,mango,starfruit = "StarFruit"] = arrFruits;

// console.log(apple, mango, starfruit); 


var arrNumbers = [];
SumOfFiveDigits();

function SumOfFiveDigits(arrNums = [1,1,1,1,1]) {
    var [ a_0 = 0, b_1= 0, c_2 = 0, d_3 = 0, e_4 = 0] = arrNums;
    var total = a_0 + b_1 + c_2 + d_3 + e_4;
    console.log(total);
}


// var x = 0;
// let arrNums = [];

// while(x < 1) {
//     let number = prompt("Enter a number");
//     if (number <= 0) {
//         console.log(arrNums);
//         break;
//     }
//     arrNums.push(number);
// }