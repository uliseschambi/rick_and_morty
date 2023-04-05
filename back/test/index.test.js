const server = require('../src/server');
const session = require('supertest');
const agent = session(server);

describe('Test de RUTAS', function () {
  describe('GET rickandmorty/onsearch/{id}', function () {
    it('Responde con status: 200', function () {
      agent.get('/rickandmorty/onsearch/1').expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"', function () {
      agent
        .get('/rickandmorty/onsearch/1')
        .expect(200)
        .then(response => {
          const props = Object.keys(response.body);
          expect(props).toContain('id');
          expect(props).toContain('name');
          expect(props).toContain('species');
          expect(props).toContain('gender');
          expect(props).toContain('image');
        });
    });
    it('Si hay un error responde con status: 500', function () {
      agent.get('/rickandmorty/IDqueNoExiste').expect(500);
    });
  });
  // Hacer los tests de las demás rutas aquí
});
