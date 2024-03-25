let weight = prompt("Enter weight in kilograms");
let height = prompt("Enter height in meters");

let bmi = parseFloat(weight) / (parseFloat(height**2));

console.log(`BMI result is: ${bmi}`);
if(bmi >= 40.0){
  console.log(`Morbidly Obese`);
} else if(bmi >= 35.0 && bmi < 39.9){
  console.log(`Severely Obese`);
} else if(bmi >= 30.0 && bmi < 34.9){
  console.log(`Moderately Obese`);
} else if(bmi >= 25.0 && bmi < 29.9){
  console.log(`Overweight`);
} else if(bmi >= 18.5 && bmi < 24.9){
  console.log(`Normal Weight`);
} else if(bmi >= 16.0 && bmi < 18.4){
  console.log(`Underweight`);
} else if(bmi < 16){
  console.log(`Severely Underweight`);
} else {
  console.log(`Invalid input`);
}