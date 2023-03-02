const express = require('express');
const router = express.Router();
const {
    addUser,
    checkLoginAouth,
} = require('../controller/User.controller');

router.post('/', addUser);

router.post("/aouth", checkLoginAouth);

module.exports = router;