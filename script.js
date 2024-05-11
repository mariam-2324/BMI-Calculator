let weight = document.querySelector(".weight");
let unit = document.querySelector(".unit");
let feet = document.querySelector(".feet");
let inches = document.querySelector(".inches");
let result = document.querySelector(".result");
let BMIStatus = document.querySelector(".BMIStatus");

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
  let bmi = (convertedWeight / totalHeight ** 2).toFixed(2);
  console.log(bmi);
  result.textContent = bmi;
  

  let status = "";
  if (bmi < 18.5) {
    status = `underweight`;
  } else if (18.5 <= bmi && bmi <= 24.9) {
    status = `Healthy`;
  } else if (25 <= bmi && bmi <= 29.9) {
    status = `Overweight`;
  } else if (30 <= bmi && bmi <= 34.9) {
    status = `Obese`;
  } else if (35 <= bmi) {
    status = `Extremely obese`;
  }

  console.log("result", result);
  BMIStatus.textContent = status;

}