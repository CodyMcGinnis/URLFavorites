const mongoose = require("mongoose");

const UserSchema = {
    first_name: {
        type: String,
        required: [true, "First Name is required"],
        minLength: [3, "First Name must be at least 3 characters"],
    },

    last_name: {
        type: String,
        required: [true, "Last Name is required"],
        minLength: [3, "Last Name must be at least 3 characters"],
    },

    email: {
        type: String,
        required: [true, "Email is required"],
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [3, "Password must be at least 3 characters"],
    },
};

module.exports = mongoose.model("User", UserSchema);