const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const dBConnection = require('./src/config/db');
require('dotenv').config();
const cors = require('cors');
const path = require('path');
const http = require('http');


const app = express();
const server = http.createServer(app);
dBConnection();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL)
    res.setHeader("Access-Control-Allow-Methods", 'GET, POST, DELETE')
    res.setHeader("Access-Control-Allow-Headers", 'Content-Type', "Authorization")
    res.header("Access-Control-Allow-Credentials", true)
    next();
})

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "/public/")));


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

app.get('/', async (req, res, next) => {
    res.send({message: 'Awesome it works 🐻'});
});

//including routers
const userRouter = require('./src/routes/User/user.router');
const classRouter = require('./src/routes/Class/class.route');
const classworkRouter = require('./src/routes/Class/classwork.route');
app.use('/users', userRouter)
app.use('/class', classRouter)
app.use('/classwork', classworkRouter)


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

//404 error handler
app.use(function (req, res, next) {
    res.status(404).sendFile(__dirname + "/error/404.html")
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
