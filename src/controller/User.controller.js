const userModel = require("../model/User.model");
const studentModel = require("../model/Student.model");
const teacherModel = require("../model/Teacher.model");
const User = require("../model/users.model");

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
        console.log(result)
        const resultSecond = await addUserToUserModel(result.UserName, result.UserEmail, result.Password)
        console.log(resultSecond);
        res.status(200).send({message: "User added successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
}

const addUserToUserModel = async (UserName, Password, UserEmail) => {
    //checking if username exist
    User.findOne({UserEmail}, (err, user) => {
        if (err) res.status(500).json("Error has occured. Please refresh page")
        else if (user) res.status(400).json("Email has been token.")
        else {
            User.findOne({UserName}, (err, user) => {
                if (err) res.status(500).json("Error has occured. Please refresh page")
                else if (user) res.status(400).json("Username has been token.")
                else {
                    //create the user account
                    const token = generateToken();
                    const newUser = new User({UserName, Password, UserEmail, token});
                    newUser.save()
                        .then(() => {
                            res.json({"Message": "Success", token});
                        })
                        .catch(err => res.status(500).json("Error has occured. Please refresh page"));
                }
            })
        }
    })
}

const generateToken = () => {
    const randomToken = require('random-token').create(SECURITY_KEY);
    return randomToken(50);
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