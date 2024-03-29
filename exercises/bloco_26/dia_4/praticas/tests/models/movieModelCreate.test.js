const sinon = require('sinon');

const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModels');

describe('Insere um novo filme ao BD', () => {
  let connectionMock;

  const payloadMovie = {
    title: 'Harry Example and the Movies',
    directedBy: 'Dobby Elf',
    releaseYear: 1999,
  };

  before(async () => {
    const DBServer = new MongoMemoryServer();
    const URLMock = await DBServer.getUri();

    connectionMock = await MongoClient
      .connect(URLMock, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then((conn) => conn.db('model_example'));

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

    it('deve existir um filme com o titulo cadastrado', async () => {
      await MoviesModel.create(payloadMovie);
      const movieCreated = await connectionMock
        .collection('movies')
        .findOne({ title: payloadMovie.title });

      expect(movieCreated).to.be.not.null;
    });
  });
});
