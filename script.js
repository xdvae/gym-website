//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
  });

  document.getElementById('bmi-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var bmi = weight / (height / 100 * height / 100);
    var resultText;
    if (bmi < 18.5) {
        resultText = 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = 'You have a normal weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = 'You are overweight.';
    } else {
        resultText = 'You are obese.';
    }
    document.getElementById('result').innerHTML = 'Your BMI is ' + bmi + '. ' + resultText;
});
 