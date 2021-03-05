let salarioBruto = 3000;
let salarioDescINSS;
let salarioBase;
let valorIR;

if (salarioBruto <= 1556.94) {
    salarioDescINSS = ((salarioBruto*0.08)-salarioBruto)*-1;
    console.log (salarioDescINSS);
}   else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioDescINSS = ((salarioBruto*0.09)-salarioBruto)*-1;
        console.log (salarioDescINSS);
    }   else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
        salarioDescINSS = ((salarioBruto*0.11)-salarioBruto)*-1;
        console.log (salarioDescINSS);
        }   else if (salarioBruto > 5189.82) {
            salarioDescINSS = (salarioBruto - 570.88)
            console.log (salarioDescINSS);
            }

            if (salarioDescINSS <= 1903.98) {
                console.log(valorIR);
            }   else if (salarioDescINSS >= 1903.99 && salarioDescINSS <= 2826.65) {
                valorIR = (salarioDescINSS * 0.075) - 142.8;
                console.log(valorIR);
                }   else if (salarioDescINSS >= 2826.66 && salarioDescINSS <= 3751.05) {
                    valorIR = (salarioDescINSS * 0.15) - 354.8;
                    console.log(valorIR);
                    }   else if (salarioDescINSS >= 3751.06 && salarioDescINSS <= 4664.68) {
                        valorIR = (salarioDescINSS * 0.225) - 636.13;
                        console.log(valorIR);
                        }   else {
                            (valorIR = (salarioDescINSS * 0.275) - 869.36);
                            console.log(valorIR);
                            }

salarioBase = (salarioDescINSS - valorIR)
console.log(salarioBase);     