let odd = [];
let even = [];

const acceptInput = (odd, even) => {
  const userInput = parseFloat(prompt("Enter number, press 0 to stop:"));

  if(userInput === 0){
    return { odd, even };
  } 

  if(userInput % 2 === 0){
    even.push(userInput);
  } else {
    odd.push(userInput);
  }

  return acceptInput(odd, even);
}

const reslutInput = acceptInput(odd, even);
const {odd: resultOdd, even: resultEven } = reslutInput;

console.log("Even Result:", resultEven);
console.log("Odd Result:", resultOdd);

// const acceptInput = (odd, even) => {
//   const userInput = parseFloat(prompt("Enter number, press 0 to stop:"));

//   if(userInput === 0){
//     return { odd, even };
//   } 

//   if(userInput % 2 === 0){
//     even.push(userInput);
//   } else {
//     odd.push(userInput);
//   }

//   return acceptInput(odd, even);
// }

// const reslutInput = acceptInput(odd, even);
// const {odd: resultOdd, even: resultEven } = reslutInput;

// console.log("Even Result:", resultEven);
// console.log("Odd Result:", resultOdd);