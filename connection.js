const mongoose = require("mongoose");
const config = require("config");

function getDatabase() {
  return config.get("connection") + config.get("database");
}

function getConnectionOptions() {
  return {
    useNewUrlParser: config.get("connectionOptions.useNewUrlParser"),
    useUnifiedTopology: config.get("connectionOptions.useUnifiedTopology"),
  };
}

module.exports = async function () {
  mongoose.set("useCreateIndex", true);
  return await mongoose.connect(getDatabase(), getConnectionOptions());
};
