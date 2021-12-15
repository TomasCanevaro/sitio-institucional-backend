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

// Find a single Vacuna with a vacuna
exports.findOne = (req, res) => {
    const vacuna = req.params.vacuna;
  
    Vacuna.findOne({vacuna: vacuna})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Vacuna with vacuna " + vacuna });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Vacuna with vacuna=" + vacuna });
      });
};

// Update a Vacuna by the vacuna in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const vacuna = req.params.vacuna;
  
    Vacuna.findOneAndUpdate({vacuna: vacuna}, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Vacuna with vacuna=${vacuna}. Maybe Vacuna was not found!`
          });
        } else res.send({ message: "Vacuna was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Vacuna with vacuna=" + vacuna
        });
      });
};

// Delete a Vacuna with the specified vacuna in the request
exports.delete = (req, res) => {
    const vacuna = req.params.vacuna;
  
    Vacuna.findOneAndRemove({vacuna: vacuna})
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Vacuna with vacuna=${vacuna}. Maybe Vacuna was not found!`
          });
        } else {
          res.send({
            message: "Vacuna was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Vacuna with vacuna=" + vacuna
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