const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
        UserName: {
            type: String,
            required: true,
        },
        UserEmail: {
            type: String,
            required: true,
        },
        Password: {
            type: String,
            required: true,
        },
        DOB: {
            type: String,
            required: true,
        }
    }, {timestamps: true}
);

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel;