const User = require("../models/user.model");

const register = async (req, res) => {
    try {
        // extract user details from request body
        const { name, email, username, password } = req.body;

        // check if all required fields are present
        if (!name || !email || !username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // check if user with the email or username already exists
        const userExists = await User.findOne({
            $or: [{ email }, { username }],
        });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        // create new user
        const newUser = new User({ name, email, username, password });

        // save user
        const savedUser = await newUser.save();

        if (savedUser) {
            return res
                .status(201)
                .json({ message: "User created successfully" });
        }
    } catch (error) {
        res.status(500).json({
            message: `New User Controller: Internal server error: ${error.message}`,
        });
    }
};
module.exports = register;
