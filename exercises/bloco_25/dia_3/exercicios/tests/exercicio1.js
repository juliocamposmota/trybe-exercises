const { expect } = require('chai');
const rankNumbers = require('../functions/exercicio1');

describe('testa um numero retornando se ele é positivo, negativo ou neutro:', () => {
  describe('testa o tipo do retorno', () => {
    it('é uma string', () => {
      const rank = rankNumbers(4);
      expect(rank).to.be.a('string');
    });
  });

  describe('quando o numero for maior que 0', () => {
    it('o retorno deve ser "positivo"', () => {
      const rank = rankNumbers(5);
      expect(rank).to.be.equals('positivo');
    });
  });

  describe('quando o numero for menor que 0', () => {
    it('o retorno deve ser "negativo"', () => {
      const rank = rankNumbers(-5);
      expect(rank).to.be.equals('negativo');
    });
  });

  describe('quando o numero for igual a 0', () => {
    it('o retorno deve ser "neutro"', () => {
      const rank = rankNumbers(0);
      expect(rank).to.be.equals('neutro');
    });
  });
});
