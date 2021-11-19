const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./user.model.js")(mongoose);
db.niños = require("./niño.model.js")(mongoose);
db.controles = require("./control.model.js")(mongoose);

module.exports = db;