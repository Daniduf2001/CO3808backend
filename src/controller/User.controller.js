const userModel = require("../model/User.model");

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


//check user login authentication
const checkLoginAouth = async (req, res) => {
    console.log("checkLoginAouth");
}

module.exports = {
    addUser,
    checkLoginAouth,
}