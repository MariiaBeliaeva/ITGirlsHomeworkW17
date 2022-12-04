const result = document.querySelector(".result");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const arithmetic = document.querySelector(".arithmetic");
const sum = document.querySelector(".sum");
const multi = document.querySelector(".multi");
const numbers = [];

function randomiseNumbers() {
  for (let i = 0; i < 10; i++) {
    let max = 10;
    let min = -10;
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  result.innerHTML = "Generated: " + numbers;

  let minNumber = Math.min.apply(null, numbers);
  min.innerHTML = "Min: " + minNumber;

  let maxNumber = Math.max.apply(null, numbers);
  max.innerHTML = "Max:" + maxNumber;

  let sumNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumNumber = sumNumber + numbers[i];
  }

  sum.innerHTML = "Summarised: " + sumNumber;
  arithmetic.innerHTML = "Arithmetic mean: " + sumNumber / 10;

  let multiplyNumber = 1;
  for (let i = 0; i < numbers.length; i++) {
    multiplyNumber = multiplyNumber * numbers[i];
  }

  multi.innerHTML = "Multiplied: " + multiplyNumber;
}
