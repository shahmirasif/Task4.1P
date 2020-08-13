const mongoose = require("mongoose");
const {salt, hash} = require("../hash.js");
const userSchema = require("../schemas/user.js");

class User {
  constructor() {
    this.User = mongoose.model("User", userSchema);
  }

  async checkUser(_user) {
    return await this.User.findOne({email: _user.email});
  }

  async createUser(_user) {
    const user = new this.User({
      country: _user.country,
      fName: _user.fName,
      lName: _user.lName,
      email: _user.email,
      password: await hash(_user.password, await salt()),
      address: _user.address,
      city: _user.city,
      region: _user.region,
      zip: _user.zip,
      contact: _user.contact,
    });

    return await user.save();
  }
}

module.exports = new User();
