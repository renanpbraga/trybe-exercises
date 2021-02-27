let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let frontNum = 1; frontNum < numbers.length; frontNum++) {
  for (let backwNum = 0; backwNum < frontNum; backwNum++) {
    if (numbers[frontNum] < numbers[backwNum]) {
      let position = numbers[frontNum];

      numbers[frontNum] = numbers[backwNum];
      numbers[backwNum] = position;
    }
  }
}

console.log(numbers);