const express = require('express');
const router = express.Router();
const {
    addUser,
    getAllUsers,
    checkLoginAouth,
} = require('../controller/User.controller');

router.post('/', addUser);
router.get('/all', getAllUsers);

router.post("/aouth", checkLoginAouth);

module.exports = router;