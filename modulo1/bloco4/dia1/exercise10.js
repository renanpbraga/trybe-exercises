let valorCusto =50; 
let valorVenda =100;
let impostoSobreOCusto = 0.2;
let valorCustoTotal = (valorCusto * impostoSobreOCusto) + (valorCusto);
let lucro = valorVenda - valorCustoTotal;
let qtdProdutos = 1000;
let receita = qtdProdutos * lucro;

console.log(receita);


