const express = require('express');
const router = express.Router();
const {
    addTeacher,
    updateTeacher,
    getAllTeachers,
    deleteTeacher,
    getTeacherByID
} = require('./../controller/Teacher.controller');

router.get('/', getAllTeachers);

router.post("/", addTeacher);

router.patch("/:id", updateTeacher);

router.delete("/:id", deleteTeacher);

router.get('/:id', getTeacherByID);

module.exports = router;