const mongoose = require("mongoose");

const AssignmentModule = new mongoose.Schema({
        TeacherID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Teacher',
            required: true,
        },
        ModuleID: {
            type: String,
            required: true,
        },
        ModuleName: {
            type: String,
            required: true,
        },
        ModuleContent: {
            type: String,
            required: true,
        },
    }, {timestamps: true}
);

const AssignmentModuleModel = mongoose.model("AssignmentModule", AssignmentModule);

module.exports = AssignmentModuleModel;