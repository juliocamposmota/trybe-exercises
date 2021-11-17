const sinon = require('sinon');
const { expect } = require('chai');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModels');

describe('Insere um novo filme ao BD', () => {
  let connectionMock;

  const payloadMovie = {
    title: 'Harry Example and the Movies',
    directedBy: 'Dobby Elf',
    releaseYear: 1999,
  };

  before(() => {
    const ID_EXAMPLE = '604cb554311d68f491ba5781';
    const insertOne = async () => ({ insertedId: ID_EXAMPLE });
    const collection = async () => ({ insertOne });
    const db = async (databaseName) => ({ collection });
    const getConnectionMock = async () => ({ db });

    connectionMock = getConnectionMock()
      .then((conn) => conn.db('model_example'));

    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });

  after(() => {
    mongoConnection.getConnection.restore();
  });

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
