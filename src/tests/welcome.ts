import app from '../app';
import * as request from 'supertest';

describe('GET / - First API Endpoint', () => {
    it('Welcome API Request', async () => {
        const result = await request(app).get('/');
        expect(result.text).toEqual('Welcome to miBank Node REST API');
        expect(result.status).toEqual(200);
    });
});