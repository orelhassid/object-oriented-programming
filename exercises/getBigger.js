const numbers = [2, 4, 15, 6];

function getBigger(numbers) {
  return Math.max(...numbers);
}

const bigger = getBigger(numbers);
console.log(bigger); // 15

const [num1, num2, num3] = [...numbers];
console.log(num1); // 2
