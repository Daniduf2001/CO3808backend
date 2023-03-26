const express = require('express');
const router = express.Router();
const {
    getAllAssignmentModule,
    getModuleByID,
    deleteModule,
    updateModule,
    addAssignmentModule
} = require("./../controller/Module.controller");

router.get('/', getAllAssignmentModule);

router.post("/", addAssignmentModule);

router.patch("/:id", updateModule);

router.delete("/:id", deleteModule);

router.get('/:id', getModuleByID);

module.exports = router;