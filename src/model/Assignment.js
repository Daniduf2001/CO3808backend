const mongoose = require("mongoose");

const Assignment = new mongoose.Schema({
        TeacherID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher',
            required: true,
        },
        StudentID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student',
            required: true,
        },
        ModuleID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AssignmentModule',
            required: true,
        },
        AssignmentID: {
            type: String,
            required: true,
        },
        AssignmentName: {
            type: String,
            required: true,
        },
        AssignmentDatePublish: {
            type: String,
            required: true,
        },
        AssignmentDeadline: {
            type: String,
            required: true,
        },
        AssignmentContent: {
            type: String,
            required: true,
        },
    }, {timestamps: true}
);

const AssignmentModel = mongoose.model("Assignment", Assignment);

module.exports = AssignmentModel;