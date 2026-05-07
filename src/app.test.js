import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from './app.js';

describe('GET /', () => {
  it('should return 200 and a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Auth Server is running');
  });
});

describe('POST /api/login', () => {
  it('should return 200 and login message', async () => {
    const res = await request(app).post('/api/login');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Login endpoint');
  });
});
