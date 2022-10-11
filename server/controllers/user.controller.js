const User = require("../models/users.model");

const createUser = (req, res) => {
    User.create(req.body)
        .then((newUser) => {
            res.json({ newUser });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const displayAllUsers = (req, res) => {
    User.find()
        .then((allUsers) => {
            res.json(allUsers);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const displayUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then((queriedUser) => {
            res.json(queriedUser);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedUser) => {
            res.json({ updatedUser });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            res.json({ deletedResponse });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

//Going to make work for portfolio
const signin = (req, res) => {
    User.findOne({ email: req.params.email, password: req.params.password })
        .then((queriedUser) => {
            res.json(queriedUser);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

module.exports = {
    createUser,
    displayUser,
    displayAllUsers,
    updateUser,
    deleteUser,
    signin
};