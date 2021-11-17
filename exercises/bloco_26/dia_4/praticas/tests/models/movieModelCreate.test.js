const { expect } = require('chai');

// objeto simulado
const MoviesModel = {
  create: () => {},
};

describe('Insere um novo filme ao BD', () => {
  const payloadMovie = {
    title: 'Harry Example and the Movies',
    directedBy: 'Dobby Elf',
    releaseYear: 1999,
  };

  describe('Quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);
      expect(response).to.have.a.property('id');
    });
  });
});
