//Keypressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".BMI-button").click();
  }
});

//BMI calculation
function calculateBMI() {
  var height = parseFloat(document.getElementById("heightInput").value);
  var weight = parseFloat(document.getElementById("weightInput").value);

  if (isNaN(height) || isNaN(weight)) {
    alert("Please enter valid numeric values for height and weight.");
    return;
  }

  var bmi = Math.round(weight / (height * height));
  if (bmi < 18.5) {
    alert("You are underweight my dear. Your Bmi is " + bmi);
  }
  if (bmi > 18.5 && bmi < 24.5) {
    alert("Hello darling, you have a normal weight and BMI of " + bmi);
  }
  if (bmi >= 25 && bmi < 29.5) {
    alert(
      "Hello Peer! You are slight Overweight but thats okay!  Although your BMI is: " +
        bmi
    );
  } else {
    alert(
      "Hello! You fall in condition of obesity. But thats totally okay! Although your BMI is: " +
        bmi
    );
  }
  alert("However you are, you are perfect!");
}
