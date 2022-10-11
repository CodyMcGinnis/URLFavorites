const mongoose = require("mongoose");

const FavoriteSchema = {
    web_name: {
        type: String,
        required: [true, "Website Name is required"],
        minLength: [3, "Website Name must be at least 3 characters"],
    },

    url: {
        type: String,
        required: [true, "URL is required"],
    },

    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [3, "Description must be at least 3 characters"],
    },
};

module.exports = mongoose.model("Favorite", FavoriteSchema);
