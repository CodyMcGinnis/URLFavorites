const Favorite = require("../models/favorites.model");

const createFavorite = (req, res) => {
    Favorite.create(req.body)
        .then((newFavorite) => {
            res.json({ newFavorite });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const displayAllFavorites = (req, res) => {
    Favorite.find()
        .then((allFavorites) => {
            res.json(allFavorites);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const displayFavorite = (req, res) => {
    Favorite.findOne({ _id: req.params.id })
        .then((queriedFavorite) => {
            res.json(queriedFavorite);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const updateFavorite = (req, res) => {
    Favorite.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedFavorite) => {
            res.json({ updatedFavorite });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const deleteFavorite = (req, res) => {
    Favorite.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            res.json({ deletedResponse });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

module.exports = {
    createFavorite,
    displayFavorite,
    displayAllFavorites,
    updateFavorite,
    deleteFavorite,
};