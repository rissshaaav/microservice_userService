const mongoose = require("mongoose");
const { generateHash, compareHash } = require("../utils/hash.utils");

// define user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    profilePictureLink: {
        type: String,
        default: "",
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        default: "",
    },
});

// generate password hash before saving user
userSchema.pre("save", generateHash);

// compare password
userSchema.methods.comparePassword = async function (password) {
    return await compareHash(password, this.password);
};

// define user model
const User = mongoose.model("User", userSchema);

module.exports = User;
