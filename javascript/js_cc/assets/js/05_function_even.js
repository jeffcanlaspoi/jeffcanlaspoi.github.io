let min = parseInt(prompt("Enter MIN"));
let max = parseInt(prompt("Enter MAX"));

const even = (min, max) => {

  if(min > max) return;

  if(min % 2 === 0) console.log(min);
  
  min++;
  even(min, max);

}

even(min, max);