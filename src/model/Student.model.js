const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
        UserID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        StudentID: {
            type: String,
            required: true,
        },
        StudentName: {
            type: String,
            required: true,
        },
        StudentMobile: {
            type: String,
            required: true,
        },
        StudentEmailAddress: {
            type: String,
            required: true,
        },
        EducationalInstitute: {
            type: String,
            required: true,
        },
    }, {timestamps: true}
);

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;