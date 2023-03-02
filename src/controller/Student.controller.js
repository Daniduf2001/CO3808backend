const studentModel = require("../model/Student.model");

//get all students
const getAllStudents = async (req, res) => {
    try {
        const result = await studentModel.find();
        res.status(200).send({message: "All students", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}


// add single student
const addStudent = async (req, res) => {
    const result = await studentModel.find();
    const studentCount = result.length;

    //generate new custom id for student
    const studentID = `STU${studentCount + 1}`;

    const {StudentName, StudentMobile, StudentEmailAddress, EducationalInstitute} = req.body;
    const student = new studentModel({
        StudentID: studentID,
        StudentName,
        StudentMobile,
        StudentEmailAddress,
        EducationalInstitute,
    });
    try {
        const result = await student.save();
        res.status(200).send({message: "Student added successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

// update single student
const updateStudent = async (req, res) => {
    const {id} = req.params;
    const {StudentName, StudentMobile, StudentEmailAddress, EducationalInstitute} = req.body;
    try {
        const result = await studentModel.findOneAndUpdate({StudentID: id}, {
            StudentID: id,
            StudentName,
            StudentMobile,
            StudentEmailAddress,
            EducationalInstitute,
        });
        res.status(200).send({message: "Student updated successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}


module.exports = {
    addStudent,
    updateStudent,
    getAllStudents,
}