const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
        TeacherID: {
            type: String,
            required: true,
        },
        TeacherName: {
            type: String,
            required: true,
        },
        TeacherMobile: {
            type: String,
            required: true,
        },
        TeacherEmailAddress: {
            type: String,
            required: true,
        },
        FieldOfExpertise: {
            type: String,
            required: true,
        },
    }, {timestamps: true}
);

const TeacherModel = mongoose.model("Teacher", TeacherSchema);

module.exports = TeacherModel;