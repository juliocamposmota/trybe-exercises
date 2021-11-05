const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const writeInFile = require('../functions/writeInFile');

const CONTEUDO = 'aurevoir shoshanna';

describe('recebe conteudo e nome do arquivo, escreve em arquivo e retorna "ok"', () => {
  before(() => sinon.stub(fs, 'writeFileSync').returns(CONTEUDO));
  after(() => fs.writeFileSync.restore());

  describe('testa o retorno', () => {
    it('é uma string', () => {
      const result = writeInFile('file1.txt', CONTEUDO);
      expect(result).to.be.a('string');
    });

    it('retorna "ok"', () => {
      const result = writeInFile('file1.txt', CONTEUDO);
      expect(result).to.be.equals('ok');
    });
  });

  describe('quando o tipo das entradas são diferentes de "string"', () => {
    it('retorna "dados informados inválidos"', () => {
      const PARAM_1_NUMBER = 2;
      const PARAM_2_NUMBER = 2;
      const PARAM_1_NULL = null;
      const PARAM_2_NULL = null;

      const resultWithNumbers = writeInFile(PARAM_1_NUMBER, PARAM_2_NUMBER);
      const resultWithNulls = writeInFile(PARAM_1_NULL, PARAM_2_NULL);

      expect(resultWithNumbers).to.be.equals('dados informados inválidos');
      expect(resultWithNulls).to.be.equals('dados informados inválidos');
    });
  });
});
