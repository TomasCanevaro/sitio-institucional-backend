const db = require("../models");
const Niño = db.niños;

// Create and Save a new Niño
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Niño
    const niño = new Niño({
        nombre: req.body.nombre,
        fechaNac: req.body.fechaNac,
        grupoSang: req.body.grupoSang,
        alergias: req.body.alergias,
        enfCron: req.body.enfCron
    });
  
    // Save Niño in the database
    niño
      .save(niño)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Niño."
      });
    });
};

// Retrieve all Niños from the database.
exports.findAll = (req, res) => {
    Niño.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Niños."
        });
      });
};

// Find a single Niño with a nombre
exports.findOne = (req, res) => {
    const nombre = req.params.nombre;
  
    Niño.findOne({nombre: nombre})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Niño with nombre " + nombre });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Niño with nombre=" + nombre });
      });
};

// Update a Niño by the nombre in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const nombre = req.params.nombre;
  
    Niño.findOneAndUpdate({nombre: nombre}, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Niño with nombre=${nombre}. Maybe Niño was not found!`
          });
        } else res.send({ message: "Niño was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Niño with nombre=" + nombre
        });
      });
};

// Delete a Niño with the specified nombre in the request
exports.delete = (req, res) => {
    const nombre = req.params.nombre;
  
    Niño.findOneAndRemove({nombre: nombre})
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Niño with nombre=${nombre}. Maybe Niño was not found!`
          });
        } else {
          res.send({
            message: "Niño was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Niño with nombre=" + nombre
        });
      });
};

// Delete all Niños from the database.
exports.deleteAll = (req, res) => {
    Niño.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Niños were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all niños."
        });
      });
};