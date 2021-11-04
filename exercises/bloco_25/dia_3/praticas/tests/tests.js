const { expect } = require('chai');
const leArquivo = require('../functions/leArquivo');

const CONTEUDO = 'VQV com TDD';

describe('leArquivo', () => {
  describe('Quando o arquivo existe', () => {
    describe('a resposta', () => {
      const resposta = leArquivo('arquivo.txt');

      it('é uma string', () => {
        expect(resposta).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(resposta).to.be.equals(CONTEUDO);
      });
    });
  });

  describe('Quando o arquivo não existe', () => {
    describe('a resposta', () => {
      it('é igual a "null"', () => {
        const resposta = leArquivo('arquivo_nao_existe.txt');
        expect(resposta).to.be.equal(null);
      });
    });
  });
});
