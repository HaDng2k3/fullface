const request = require('supertest');
const app = require('../app'); // import ứng dụng Express

describe('Test API endpoints', () => {
    it('GET /api/users trả về mã trạng thái 200', async () => {
        const response = await request(app).get('/api/users');
        expect(response.status).toBe(200);
    });

    it('GET /api/users/:id trả về thông tin người dùng cụ thể', async () => {
        const response = await request(app).get('/api/users/1');
        expect(response.body.id).toBe(1);
        expect(response.body.username).toBe('example');
    });
});
