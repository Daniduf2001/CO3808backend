const userModel = require("../model/User.model");
const studentModel = require("../model/Student.model");
const teacherModel = require("../model/Teacher.model");

//add user to the system
const addUser = async (req, res) => {
    const {UserName, UserEmail, Password, DOB} = req.body;
    const user = new userModel({
        UserName,
        UserEmail,
        Password,
        DOB
    });
    try {
        const result = await user.save();
        res.status(200).send({message: "User added successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

const getAllUsers = async (req, res) => {
    try {
        const result = await userModel.find();
        res.status(200).send({message: "All users", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

//check user login authentication
const checkLoginAouth = async (req, res) => {
    //check user email and password
    const {UserEmail, Password} = req.body;
    // try {
        console.log(UserEmail, Password);
        const result = await userModel.findOne({UserEmail, Password});
        if (result) {
            // res.status(200).send({message: "User login successfully", data: result, isSuccess: true});
            //find user type by _id
            const studentType = await studentModel.findOne({UserID: result._id});
            if (studentType == null) {
                const teacherType = teacherModel.findOne({UserID: result._id});
                console.log(teacherType);
                if (teacherType != null) {
                    res.status(200).send({
                        message: "User login successfully",
                        data: teacherType,
                        isSuccess: true,
                        userType: "teacher"
                    });
                }
            } else {
                res.status(200).send({
                    message: "User login successfully",
                    data: studentType,
                    isSuccess: true,
                    userType: "student"
                });
            }
        } else {
            res.status(500).send({isSuccess: false, message: "User login failed"});
        }
    // } catch (e) {
    //     res.status(500).send({message: "Something went wrong", error: e});
    // }
}

module.exports = {
    addUser,
    getAllUsers,
    checkLoginAouth,
}