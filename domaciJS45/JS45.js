function nizz(numbers) {
  num = 0;
  if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
    num = numbers[0];
  }
  if (
    numbers[numbers.length - 1] !== numbers[numbers.length - 2] &&
    numbers[numbers.length - 1] !== numbers[numbers.length - 3]
  ) {
    num = numbers[numbers.length - 1];
  }

  for (let i = 1; i < numbers.length - 1; i++) {
    if (numbers[i] !== numbers[i - 1] && numbers[i] !== numbers[i + 1]) {
      num = numbers[i];
      break;
    }
  }
  return num;
}
console.log(nizz([1, 2, 1, 1, 1, 1, 1]));
console.log(nizz([1, 1, 17, 1, 1, 1, 1]));
console.log(nizz([1, 4, 1, 1, 1, 1, 1]));
