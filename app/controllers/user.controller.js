const db = require("../models");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a User
    const user = new User({
      nombre: req.body.nombre,
      dni: req.body.dni,
      mail: req.body.mail,
      telefono: req.body.telefono,
      contraseña: req.body.contraseña
    });
  
    // Save User in the database
    user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      });
};

// Find a single User with nombre
exports.findOne = (req, res) => {
    const nombre = req.params.nombre;
  
    User.findOne({nombre: nombre})
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found User with nombre " + nombre });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving User with nombre=" + nombre });
      });
};

// Update a User by the nombre in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const nombre = req.params.nombre;
  
    User.findOneAndUpdate({nombre: nombre}, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update User with nombre=${nombre}. Maybe User was not found!`
          });
        } else res.send({ message: "User was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with nombre=" + nombre
        });
      });
};

// Delete a User with the specified nombre in the request
exports.delete = (req, res) => {
    const nombre = req.params.nombre;
  
    User.findOneAndRemove({nombre: nombre})
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete User with nombre=${nombre}. Maybe User was not found!`
          });
        } else {
          res.send({
            message: "User was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with nombre=" + nombre
        });
      });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
    User.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Users were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all users."
        });
      });
};