import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Auth Server is running' });
});

app.post('/api/login', (req, res) => {
    res.json({ message: 'Login endpoint' });
});

app.post('/api/register', (req, res) => {
    res.json({ message: 'Register endpoint' });
});

export default app;
