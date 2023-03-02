const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
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

const TeacherModel = mongoose.model("Teacher", TeacherSchema);

module.exports = TeacherModel;