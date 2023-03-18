const mongoose = require("mongoose");

const TimeTable = new mongoose.Schema({
        ModuleID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'AssignmentModule',
            required: true,
        },
        AssignmentID: {
            type: String,
            required: true,
        },
       ModuleName: {
            type: String,
            required: true,
        },
        ClassDate: {
            type: String,
            required: true,
        },
        StartTime: {
            type: String,
            required: true,
        },
        EndTime: {
            type: String,
            required: true,
        },
        classMaterial: {
            type: String,
            required: true,
        },
    }, {timestamps: true}
);

const AssignmentModel = mongoose.model("AssignmentModel", Assignment);

module.exports = AssignmentModel;