const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Ong X",
                email: "contato@email.com",
                whatsapp: "67912345678",
                city: "São Paulo",
                uf: "SP"
            });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});