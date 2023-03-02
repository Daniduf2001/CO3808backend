const express = require('express');
const router = express.Router();
const {
    addStudent,
    updateStudent,
    getAllStudents,
    deleteStudent,
    getStudentByID
} = require("./../controller/Student.controller");

router.get('/', getAllStudents);

router.post("/", addStudent);

router.patch("/:id", updateStudent);

router.delete("/:id", deleteStudent);

router.get('/:id', getStudentByID);

module.exports = router;