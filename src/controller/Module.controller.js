const AssignmentModuleModel = require("../model/AssignmentModule.model");

//get all students
const getAllAssignmentModule = async (req, res) => {
    try {
        const result = await AssignmentModuleModel.find();
        res.status(200).send({message: "All Module", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}


// add single student
const addAssignmentModule = async (req, res) => {

    const result = await AssignmentModuleModel.find();
    const moduleCount = result.length;

    //generate new custom id for module
    const moduleID = `MDL${moduleCount + 1}`;

    const {
        TeacherID,
        ModuleID,
        ModuleName,
        ModuleContent,
    } = req.body;
    const newModule = new AssignmentModuleModel({
        TeacherID,
        ModuleID: moduleID,
        ModuleName,
        ModuleContent,
    });
    try {
        const result = await newModule.save();
        res.status(200).send({message: "Module added successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

// update single student
const updateModule = async (req, res) => {
    const {id} = req.params;
    const {
        TeacherID,
        ModuleID,
        ModuleName,
        ModuleContent,
    } = req.body;
    try {
        const result = await AssignmentModuleModel.findOneAndUpdate({ModuleID: id}, {
            TeacherID,
            ModuleID: moduleID,
            ModuleName,
            ModuleContent,
        });
        res.status(200).send({message: "Module updated successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

// delete single student
const deleteModule = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await AssignmentModuleModel.findOneAndDelete({ModuleID: id});
        res.status(200).send({message: "Module deleted successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

// search single student by studentID
const getModuleByID = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await AssignmentModuleModel.findOne({ModuleID: id});
        res.status(200).send({message: "Module found", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

module.exports = {
    addAssignmentModule,
    updateModule,
    deleteModule,
    getModuleByID,
    getAllAssignmentModule
}