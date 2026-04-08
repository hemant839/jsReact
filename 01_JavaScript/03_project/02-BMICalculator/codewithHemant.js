document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Please enter valid positive numbers for weight and height.');
        return;
    }
    const bmi = weight / ((height / 100) ** 2);
    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)}`;
});