const express = require('express')
const app = express();
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRouts');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/api/v1/health', (req, res) => {
    res.send('OK');
});
app.get('/api/v1/ready', (req, res) => {
    res.send('OK');
});
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/post', postRoutes)

app.use((err, req, res, next) => {
    res.status(500).send(err.error.toString());
});

module.exports = app;