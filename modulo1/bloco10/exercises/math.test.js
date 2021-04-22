const { somar, subtrair, multiplicar, dividir } = require('./math');

jest.mock('./math'); // mocka todo o arquivo math.

describe('testa funções de Math', () => { // cria o ambiente de testes

    test('testa a função subtrair', () => { // testa a função especifica
    
        subtrair.mockImplementation((a, b) => a - b); // reimplementa a função a ser testada
        expect(subtrair(2, 1)).toBe(1); // passa a função testada e os parâmetros e o valor a retornar
    
    });
});