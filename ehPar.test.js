const { describe } = require('yargs')
const ehPar = require('./ehPar')
const { expectFailure } = require('node:test')

describe('ehPar.js', ()=>{
    test('resultado, eu ahco que é Par com numero quemEhOTRU', ()=>{
        expect(ehPar('O numero é par')).toBe()
    })
})