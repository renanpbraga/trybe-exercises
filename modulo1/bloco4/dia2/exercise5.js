let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 0;

for (let index = 0; index < numbers.length; index++) {
    if (menorNumero < numbers[index]) {
        menorNumero = numbers[index]
    }
    }
    console.log(menorNumero);