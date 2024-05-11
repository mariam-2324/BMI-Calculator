let weight = document.querySelector(".weight");
let unit = document.querySelector(".unit");
let feet = document.querySelector(".feet");
let inches = document.querySelector(".inches");
let result = document.querySelector(".result");
let bmiStatus = document.querySelector(".BMIStatus");

function calculateBMI() {
  let convertedWeight = weight.value;
  console.log("weight.value", weight.value);

  // conversion of lbs into kg
  if (unit.value === "lbs") {
    convertedWeight = weight.value * 0.453592;
  }

  // //conversion of values into meter

  let totalHeight = (feet.value * 0.3048) + inches.value * 0.0254;
  console.log("total height in meters ", totalHeight);

  //=============BMI-Ratio======================================
  let bmi = (weight.value / totalHeight ** 2).toFixed(2);
  console.log(bmi);
  console.log("result", result);
  result.textContent = bmi;
  

  const status = "";
  if (bmi < 18.5) {
    result = `underweight`;
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = `Healthy`;
  } else if (25 <= bmi && bmi <= 29.9) {
    result = `Overweight`;
  } else if (30 <= bmi && bmi <= 34.9) {
    result = `Obese`;
  } else if (35 <= bmi) {
    result = `Extremely obese`;
  }

  BMIStatus.textContent = status;
 
}






// function calculate(){
//     console.log(weight.value);
//     console.log(unit.value);
//     console.log(feet.value)
//     console.log(inches.value);

// }
