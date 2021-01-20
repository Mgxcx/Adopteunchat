var mongoose = require("mongoose");

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(
  "mongodb+srv://Mgxcx:Cremeoignons93@cluster0.ogygz.mongodb.net/Sideproject?retryWrites=true&w=majority",
  options,
  function (err) {
    console.log(err);
  }
);
