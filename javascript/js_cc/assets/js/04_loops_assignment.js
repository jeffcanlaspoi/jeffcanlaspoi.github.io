let startNum = parseInt(prompt("Enter start Number"));
let endNum = parseInt(prompt("Enter end number"));

const isEven = (number) => {
  return number % 2 === 0;
}

for(let i = startNum; i <= endNum; i++){
  isEven(i) ? console.log(i) : null;
}
  