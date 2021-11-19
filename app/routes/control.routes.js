module.exports = app => {
    const controles = require("../controllers/control.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Control
    router.post("/", controles.create);
  
    // Retrieve all Controles
    router.get("/", controles.findAll);
  
    // Retrieve a single Control with id
    router.get("/:id", controles.findOne);
  
    // Update a Control with id
    router.put("/:id", controles.update);
  
    // Delete a Control with id
    router.delete("/:id", controles.delete);
  
    // Delete all Controles
    router.delete("/", controles.deleteAll);
  
    app.use('/api/controles', router);
};