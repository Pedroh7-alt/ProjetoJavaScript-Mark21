const { describe } = require('yargs');
const multiplicacao = require('./multiplicacao');

describe('multiplicacao.js', ()=>{
    test('O resultado da multiplicacao de 3 x 4 de ser igual a 12',()=>{
        expect(multiplicacao(3,4)).toBe(12);
    })
});

it('deve retornar o 0 quando multiplicar qualquer número por 0', ()=>{
    expect(multiplicacao(7,0)).toBe(0)
    expect(multiplicacao(0,3)).toBe(0)
    expect(multiplicacao(0,0)).toBe(0)
});


