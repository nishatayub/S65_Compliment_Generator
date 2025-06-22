const Users = require("../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");    

exports.getUser = async(req,res) => {
    try{
        const { id } = req.params;
        if(id){
            const user = await Users.findById(id);
            if(user){
                return res.status(200).json(user);
            }
            else{
                return res.status(404).json({message: "User not found"});
            }
        }
        const users = await Users.find();
        return res.status(200).json(users); 
    }catch(err){
        return res.status(500).json({message: err.message});
    }
};

exports.addUser = async(req,res) => {
    try{
        const { name, email, password } = req.body;
        // Check if user already exists
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password.toString(), 10);

        const newUser = new Users({ name, email, password: hashedPassword });
        await newUser.save();
        return res.status(201).json({ data: newUser, message: "User registered successfully!!!"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
};

exports.updateUser = async(req,res) => {
    try{
        const { id } = req.params;
        const { name, email, password } = req.body;
        const updatedUser = await Users.findByIdAndUpdate
        (id, {name, email, password}, {new: true, runValidators: true});
        if(updatedUser){
            return res.status(200).json(updatedUser);
        }
        return res.status(404).json({message: "User not found"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
};

exports.deleteUser = async(req,res) => {
    try{
        const { id } = req.params;
        const deletedUser = await Users.findByIdAndDelete(id);
        if(deletedUser){
            return res.status(200).json({message: "User deleted"});
        }
        return res.status(404).json({message: "User not found"});
    }catch(err){
        return res.status(500).json({message: err.message});
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await Users.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT Token
        const token = jwt.sign({ id: user._id }, "your_secret_key", { expiresIn: "1h" });

        return res.status(200).json({ message: "Login successful", token });
        redirect("/home");
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
