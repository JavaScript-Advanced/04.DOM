function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    resultElement = document.getElementById('result').textContent = firstNumber - secondNumber;
}