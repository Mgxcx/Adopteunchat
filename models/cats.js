var mongoose = require("mongoose");

var catSchema = mongoose.Schema({
  src: String,
  name: String,
  department: String,
  race: String,
  gender: String,
  poils: String,
  age: String,
  description: String,
});

var catModel = mongoose.model("cats", catSchema);

module.exports = { catModel };
