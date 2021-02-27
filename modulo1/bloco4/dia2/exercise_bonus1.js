let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let numeroDaFrente = 1; numeroDaFrente < numbers.length; numeroDaFrente++) {
  for (let numeroDeTras = 0; numeroDeTras < numeroDaFrente; numeroDeTras++) {
    if (numbers[numeroDaFrente] < numbers[numeroDeTras]) {
      let posicao = numbers[numeroDaFrente];

      numbers[numeroDaFrente] = numbers[numeroDeTras];
      numbers[numeroDeTras] = posicao;
    }
  }
}

console.log(numbers);