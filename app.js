const express = require('express')
const app = express();
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRouts');
app.use(express.json());


app.use('/api/v1/user', userRoutes);
app.use('/api/v1/post', postRoutes)

app.use((err, req, res, next) => {
    res.status(500).send(err.error.toString());
});

module.exports = app;