const mongoose = require("mongoose");

const ModuleModel = new mongoose.Schema({
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

const AssignmentModuleModel = mongoose.model("AssignmentModuleModel", ModuleModel);

module.exports = AssignmentModuleModel;