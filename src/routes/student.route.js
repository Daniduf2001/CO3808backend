const express = require('express');
const router = express.Router();
const {addStudent, updateStudent, getAllStudents} = require("./../controller/Student.controller");


router.get('/', getAllStudents);

router.post("/", addStudent);

router.patch("/:id", updateStudent);

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