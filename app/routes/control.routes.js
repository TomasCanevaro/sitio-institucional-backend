module.exports = app => {
    const controles = require("../controllers/control.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Control
    router.post("/", controles.create);
  
    // Retrieve all Controles
    router.get("/", controles.findAll);
  
    // Retrieve a single Control with niño
    router.get("/:chico", controles.findOne);
  
    // Update a Control with niño
    router.put("/:chico", controles.update);
  
    // Delete a Control with niño
    router.delete("/:chico", controles.delete);
  
    // Delete all Controles
    router.delete("/", controles.deleteAll);
  
    app.use('/api/controles', router);
};