const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const dBConnection = require('./src/config/db');
require('dotenv').config();
const cors = require('cors');

const app = express();
dBConnection();
app.use(
    cors({
        origin: 'http://localhost:8000',
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
    res.send({message: 'Awesome it works 🐻'});
});

app.use('/api/student', require('./src/routes/student.route'));
app.use('/api/teacher', require('./src/routes/teacher.route'));
app.use('/api/user', require('./src/routes/user.route'));

app.use((req, res, next) => {
    next(createError.NotFound());
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        status: err.status || 500,
        message: err.message,
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
