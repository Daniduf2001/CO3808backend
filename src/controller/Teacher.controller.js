const teacherModel = require("../model/Teacher.model");

//get all teachers
const getAllTeachers = async (req, res) => {
    try {
        const result = await teacherModel.find();
        res.status(200).send({message: "All teachers", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}


// add single student
const addTeacher = async (req, res) => {
    const result = await teacherModel.find();
    const studentCount = result.length;

    //generate new custom id for teacher
    const teacherID = `STU${studentCount + 1}`;

    const {UserID,TeacherName, TeacherMobile, TeacherEmailAddress, FieldOfExpertise,} = req.body;
    const teacher = new teacherModel({
        UserID,
        TeacherID: teacherID,
        TeacherName,
        TeacherMobile,
        TeacherEmailAddress,
        FieldOfExpertise,
    });
    try {
        const result = await teacher.save();
        res.status(200).send({message: "Teacher added successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

// update single teacher
const updateTeacher = async (req, res) => {
    const {id} = req.params;
    const {TeacherName, TeacherMobile, TeacherEmailAddress, FieldOfExpertise,} = req.body;
    try {
        const result = await teacherModel.findOneAndUpdate({TeacherID: id}, {
            TeacherID: id,
            TeacherName,
            TeacherMobile,
            TeacherEmailAddress,
            FieldOfExpertise,
        });
        res.status(200).send({message: "Teacher updated successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

// delete single teacher
const deleteTeacher = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await teacherModel.findOneAndDelete({TeacherID: id});
        res.status(200).send({message: "Teacher deleted successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

// search single student by studentID
const getTeacherByID = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await teacherModel.findOne({TeacherID: id});
        res.status(200).send({message: "Teacher found", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

module.exports = {
    addTeacher,
    updateTeacher,
    getAllTeachers,
    deleteTeacher,
    getTeacherByID,
}