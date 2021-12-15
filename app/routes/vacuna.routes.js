module.exports = app => {
    const vacunas = require("../controllers/vacuna.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Vacuna
    router.post("/", vacunas.create);
  
    // Retrieve all Vacunas
    router.get("/", vacunas.findAll);
  
    // Retrieve a single Vacuna with vacuna
    router.get("/:vacuna", vacunas.findOne);
  
    // Update a Vacuna with vacuna
    router.put("/:vacuna", vacunas.update);
  
    // Delete a Vacuna with vacuna
    router.delete("/:vacuna", vacunas.delete);
  
    // Delete all Vacunas
    router.delete("/", vacunas.deleteAll);
  
    app.use('/api/vacunas', router);
};