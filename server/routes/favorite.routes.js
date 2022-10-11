const FavoriteController = require("../controllers/favorite.controller");

module.exports = (app)=>{
    app.post("/api/favorites", FavoriteController.createFavorite);
    app.get("/api/favorites", FavoriteController.displayAllFavorites);
    app.get("/api/favorites/:id", FavoriteController.displayFavorite);
    app.put("/api/favorites/:id", FavoriteController.updateFavorite);
    app.delete("/api/favorites/:id", FavoriteController.deleteFavorite);
}