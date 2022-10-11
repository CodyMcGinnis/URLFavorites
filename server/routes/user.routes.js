const UserController = require("../controllers/user.controller");

module.exports = (app)=>{
    app.post("/api/users", UserController.createUser);
    app.post("/api/login/:email&:password", UserController.signin);
    app.get("/api/users", UserController.displayAllUsers);
    app.get("/api/users/:id", UserController.displayUser);
    app.put("/api/users/:id", UserController.updateUser);
    app.delete("/api/users/:id", UserController.deleteUser);
}