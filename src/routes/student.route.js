const express = require('express');
const router = express.Router();


router.get('/', async (req, res, next) => {
    res.send({message: 'Ok student api is working 🚀'});
});

router.post("/", async (req, res, next) => {
    const {email, password} = req.body;
    if (email === "" || password === "") {
        res.status(400).send({message: "Email or password is missing"});
    }
});

router.put("/", async (req, res, next) => {
    const {email, password} = req.body;
    if (email === "" || password === "") {
        res.status(400).send({message: "Email or password is missing"});
    }
});

router.delete("/", async (req, res, next) => {
    const {email, password} = req.body;
    if (email === "" || password === "") {
        res.status(400).send({message: "Email or password is missing"});
    }
});


router.get('/:id', async (req, res, next) => {
    const {id} = req.params;
    res.send({message: `Ok api is working with ${id} 🚀`});
});


module.exports = router;