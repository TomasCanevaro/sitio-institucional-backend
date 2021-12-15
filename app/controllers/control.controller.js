const db = require("../models");
const Control = db.controles;

// Create and Save a new Control
exports.create = (req, res) => {
    // Validate request
    if (!req.body.niño) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Control
    const control = new Control({
        niño: req.body.niño,
        fecha: req.body.fecha,
        peso: req.body.peso,
        altura: req.body.altura,
        diametroCabeza: req.body.diametroCabeza,
        observaciones: req.body.observaciones,
        medicamentos: req.body.medicamentos,
        estudios: req.body.estudios,
        resultados: req.body.resultados
    });
  
    // Save Control in the database
    control
      .save(control)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Control."
      });
    });
};

// Retrieve all Controles from the database.
exports.findAll = (req, res) => {
    Control.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Controles."
        });
      });
};

// Find a single Control with a niño
exports.findOne = (req, res) => {
    const chico = req.params.chico;
  
    Control.findOne({niño: chico})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Control with niño " + chico });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Control with niño=" + chico });
      });
};

// Update a Control by the niño in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const chico = req.params.chico;
  
    Control.findOneAndUpdate({niño: chico}, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Control with niño=${chico}. Maybe Control was not found!`
          });
        } else res.send({ message: "Control was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Control with niño=" + chico
        });
      });
};

// Delete a Control with the specified niño in the request
exports.delete = (req, res) => {
    const chico = req.params.chico;
  
    Control.findOneAndRemove({niño: chico})
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Control with niño=${chico}. Maybe Control was not found!`
          });
        } else {
          res.send({
            message: "Control was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Control with niño=" + chico
        });
      });
};

// Delete all Controles from the database.
exports.deleteAll = (req, res) => {
    Control.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Controles were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all controles."
        });
      });
};
