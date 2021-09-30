const readline = require('readline-sync');

const peso = readline.question('Qual seu peso? ');
const altura = readline.questionInt('Qual sua altura em centímetros? ');
const imc = `${peso/(altura/100)**2}`;

switch (true) {
  case imc < 18.5:
    console.log('Abaixo do peso', imc);
    break;
  case imc >= 18.5 && imc <= 24.9:
    console.log('Peso normal', imc);
    break;
  case imc >= 25 && imc <= 29.9:
    console.log('Acima do peso', imc);
    break;
  case imc >= 30 && imc <= 34.9:
    console.log('Obesidade grau I', imc);
    break;
  case imc >= 35 && imc <= 39.9:
    console.log('Obesidade grau II', imc);
    break;
  case imc >= 40 :
    console.log('Obesidade grau III', imc)
    break;
  default: console.log('valores inválidos');
}

// if(imc < 18.5){
//   console.log('Abaixo do peso', imc);
// } else if(){
//   console.log('Peso normal', imc);
// } else if(imc >= 25 || imc <= 29.9){
//   console.log('Acima do peso', imc);
// } else if(imc >= 30 || imc <= 34.9){
//   console.log('Obesidade grau I', imc);
// } else if(imc >= 35 || imc <= 39.9){
//   console.log('Obesidade grau II', imc);
// } else { console.log('Obesidade grau III', imc)};