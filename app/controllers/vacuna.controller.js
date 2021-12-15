const db = require("../models");
const Vacuna = db.vacunas;

// Create and Save a new Vacuna
exports.create = (req, res) => {
    // Validate request
    if (!req.body.vacuna) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Vacuna
    const vacuna = new Vacuna({
        vacuna: req.body.vacuna,
        fecha: req.body.fecha,
        lugar: req.body.lugar
    });
  
    // Save Vacuna in the database
    vacuna
      .save(vacuna)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Vacuna."
      });
    });
};

// Retrieve all Vacunas from the database.
exports.findAll = (req, res) => {
    Vacuna.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Vacunas."
        });
      });
};

// Find a single Vacuna with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Vacuna.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Vacuna with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Vacuna with id=" + id });
      });
};

// Update a Vacuna by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Vacuna.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Vacuna with id=${id}. Maybe Vacuna was not found!`
          });
        } else res.send({ message: "Vacuna was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Vacuna with id=" + id
        });
      });
};

// Delete a Vacuna with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Vacuna.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Vacuna with id=${id}. Maybe Vacuna was not found!`
          });
        } else {
          res.send({
            message: "Vacuna was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Vacuna with id=" + id
        });
      });
};

// Delete all Vacunas from the database.
exports.deleteAll = (req, res) => {
    Vacuna.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Vacuna were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all vacunas."
        });
      });
};