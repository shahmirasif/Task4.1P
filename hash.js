const bcrypt = require("bcrypt");

async function salt(length = 10) {
  return await bcrypt.genSalt(length);
}

async function hash(password, salt) {
  return await bcrypt.hash(password, salt);
}

async function check(password, hash) {
  return await bcrypt.compare(password, hash);
}

exports.salt = salt;
exports.hash = hash;
exports.check = check;
