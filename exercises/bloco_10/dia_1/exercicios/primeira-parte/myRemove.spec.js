const { test, expect, describe } = require('@jest/globals');
const { myRemove } = require('./myRemove');

describe('A função My Remove: ', () => {
  it('Retorna ([1, 2, 4]) quando recebe ([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Não retorna ([1, 2, 3, 4]) quando recebe ([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Não altera o array inicial passado como parâmetro', () => {
    const list = [1, 2, 3, 4];
    myRemove(list, 10);
    expect(list).toEqual([1, 2, 3, 4]);
  });

  it('Altera o array esperado', () => {
    const newList = myRemove([1, 2, 3, 4], 4);
    expect(newList).toEqual([1, 2, 3]);
  })
});
