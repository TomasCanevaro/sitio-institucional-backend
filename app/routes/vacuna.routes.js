module.exports = app => {
    const vacunas = require("../controllers/vacuna.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Vacuna
    router.post("/", vacunas.create);
  
    // Retrieve all Vacunas
    router.get("/", vacunas.findAll);
  
    // Retrieve a single Vacuna with id
    router.get("/:id", vacunas.findOne);
  
    // Update a Vacuna with id
    router.put("/:id", vacunas.update);
  
    // Delete a Vacuna with id
    router.delete("/:id", vacunas.delete);
  
    // Delete all Vacunas
    router.delete("/", vacunas.deleteAll);
  
    app.use('/api/vacunas', router);
};