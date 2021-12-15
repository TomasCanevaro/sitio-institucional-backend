module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/", users.create);
  
    // Retrieve all Users
    router.get("/", users.findAll);
  
    // Retrieve a single User with nombre
    router.get("/:nombre", users.findOne);
  
    // Update a User with nombre
    router.put("/:nombre", users.update);
  
    // Delete a User with nombre
    router.delete("/:nombre", users.delete);
  
    // Delete all Users
    router.delete("/", users.deleteAll);
  
    app.use('/api/users', router);
};