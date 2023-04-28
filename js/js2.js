let slider2 = document.getElementById("age1");
let avalue = document.getElementById("a");
avalue.innerHTML = slider2.value;

slider2.oninput = function() {
  avalue.innerHTML = this.value;
}
function calculate() {
  // Get user input values
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let age = document.getElementById("age1").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let activityLevel = document.getElementById("activity").value;
  let food = document.getElementById("food").value;

  // Calculate BMR based on gender
  let bmr;
  if (gender === "male") {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  if (weight < 20 && weight > 0) {
    document.getElementById("error").innerHTML = "The weight cannot be under 20 kilograms."
    document.getElementById("bmr").innerHTML = " ";
  document.getElementById("tdee").innerHTML = " ";
  document.getElementById("info").innerHTML = " ";
  }
  else if (weight > 700) {
    document.getElementById("error").innerHTML = "The weight cannot be over 700 kilograms."
    document.getElementById("bmr").innerHTML = " ";
    document.getElementById("tdee").innerHTML = " ";
    document.getElementById("info").innerHTML = " ";
  }

  else if (height < 20 && height > 0) {
    document.getElementById("error").innerHTML = "The height cannot be under 20 centimeters."
    document.getElementById("bmr").innerHTML = " ";
    document.getElementById("tdee").innerHTML = " ";
    document.getElementById("info").innerHTML = " ";
  }

  else if (height > 275) {
    document.getElementById("error").innerHTML = "The height cannot be over 275 centimeters."
    document.getElementById("bmr").innerHTML = " ";
    document.getElementById("tdee").innerHTML = " ";
    document.getElementById("info").innerHTML = " ";
  }

  else if (weight == 0 && height == 0) {
    document.getElementById("error").innerHTML = "Please enter weight and height."
    document.getElementById("bmr").innerHTML = " ";
    document.getElementById("tdee").innerHTML = " ";
    document.getElementById("info").innerHTML = " ";
  }


  else if (height == 0) {
    document.getElementById("error").innerHTML = "Please enter height."
    document.getElementById("bmr").innerHTML = " ";
    document.getElementById("tdee").innerHTML = " ";
    document.getElementById("info").innerHTML = " ";
  }

  else if (weight == 0) {
    document.getElementById("error").innerHTML = "Please enter weight."
    document.getElementById("bmr").innerHTML = " ";
    document.getElementById("tdee").innerHTML = " ";
    document.getElementById("info").innerHTML = " ";
  }


else { 
  
  let tdee = bmr * activityLevel;
  let intake = tdee * food;
  let intake1 = intake * 1.1;
  let intake2 = intake * 0.9;
  document.getElementById("intake").innerHTML = "Your recommended calorie intake based on your fitness goals is:" + " " + intake2.toFixed(0) + " " + "to" + " " + intake1.toFixed(0);

  document.getElementById("error").innerHTML = " ";
  document.getElementById("bmr").innerHTML = "Your BMR is: " + (bmr*0.9).toFixed(0) + " " + "to" + " " + (bmr*1.1).toFixed(0) + " calories. <br>";
  document.getElementById("tdee").innerHTML = "Your TDEE is: " + (tdee*0.9).toFixed(0) + " " + "to" + " " + (tdee*1.1).toFixed(0) + " " +  " calories. <br>";
  document.getElementById("info").innerHTML = "Please keep in mind that if your calorie suggestion is too low, that may not be healthy or sustainable for you. <br> You should NOT eat 1200 kcal or less a day, if you're not a toddler or in complete bed rest.";
 
}
}
