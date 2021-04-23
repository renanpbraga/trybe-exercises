const { somar, subtrair, multiplicar, dividir } = require('./math');

jest.mock('./math'); // mocka todo o arquivo math.

describe('testa funções de Math', () => { // cria o ambiente de testes

    test('testa a função subtrair', () => { // testa a função especifica
        expect.assertions(1)
        subtrair.mockImplementation((a, b) => a - b); // reimplementa a função a ser testada
        subtrair(); //chama a função por conta do toHaveBennCalled
        expect(subtrair).toHaveBeenCalled(); // passa a função testada e os parâmetros e o valor a retornar
    });

    test('testa a função multiplicar', () => {
        expect.assertions(2);
        multiplicar.mockImplementation((a, b) => a * b);
        multiplicar();
        expect(multiplicar).toHaveBeenCalled();
        expect(multiplicar(2, 5)).toBe(10);
    });
    
    test('testa a função somar', () => {
        expect.assertions(3);
        somar.mockImplementation((a, b) => a + b);
        somar();
        expect(somar).toHaveBeenCalled();
        expect(somar(2, 5)).toBe(7);
        expect(somar).toHaveBeenCalledWith(2, 5);
    });

    test()
});