module.exports = app => {
    const niños = require("../controllers/niño.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Niño
    router.post("/", niños.create);
  
    // Retrieve all Niños
    router.get("/", niños.findAll);
  
    // Retrieve a single Niño with id
    router.get("/:id", niños.findOne);
  
    // Update a Niño with id
    router.put("/:id", niños.update);
  
    // Delete a Niño with id
    router.delete("/:id", niños.delete);
  
    // Delete all Niños
    router.delete("/", niños.deleteAll);
  
    //la palabra niños parece no funcionar porque la ñ rompe la request, asi que cambie el nombre a chicos
    app.use('/api/chicos', router);
};