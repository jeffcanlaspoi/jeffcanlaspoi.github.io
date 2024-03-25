let startNum = parseInt(prompt("Enter MIN"));
let endNum = parseInt(prompt("Enter MAX"));

const isEven = (number) => {
  return number % 2 === 0;
}

if(startNum > endNum)
  console.log('Invalid input, MIN input is larger than MAX input');
else
  for(let i = startNum; i <= endNum; i++){
    isEven(i) ? console.log(i) : null;
  }
  