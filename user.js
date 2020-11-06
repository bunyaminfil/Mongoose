var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Mongo");

var Schema = mongoose.Schema;

var userSchema = new Schema({
  ad: String,
  soyad: String,
  dogumTarihi: String,
  email: String,
});

var User = mongoose.model("User", userSchema);

module.exports = User;
