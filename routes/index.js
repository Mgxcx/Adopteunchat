var express = require("express");
var router = express.Router();
var request = require("sync-request");
var catData = require("../models/cats");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { name: req.session.name });
});

router.get("/adopter", async function (req, res, next) {
  var catList = await catData.catModel.find();
  res.render("adopter", { catList, name: req.session.name });
});

router.post("/searchadopter", async function (req, res, next) {
  value_sort = "";
  for (var property in req.body) {
    if (property === "sort") {
      value_sort = req.body[property].toLowerCase();
      delete req.body[property];
    } else if (req.body[property] === null || req.body[property] === undefined || req.body[property] === "") {
      delete req.body[property];
    }
  }

  var catList = await catData.catModel.find(req.body).sort(value_sort);

  res.render("adopter", { catList, name: req.session.name });
});

router.post("/addadopter", async function (req, res, next) {
  var correspondance_race = {
    Norvégien: "Norwegian Forest Cat",
    Bombay: "Bombay",
    Ragdoll: "Ragdoll",
    Chartreux: "Chartreux",
    Bengal: "Bengal",
    Siamoise: "Siamese",
    Burmese: "Burmese",
    Hymalayen: "Himalayan",
  };

  race_mgx = req.body.race;
  race_api = correspondance_race[race_mgx];

  var catapi = request("GET", `https://api.thecatapi.com/v1/breeds/search?q=${race_api}`, {
    headers: { "x-api-key": "2b89c7de-e1e9-4612-a3b7-fb1befa879a0" },
  });
  catapi = JSON.parse(catapi.body);

  var catapi_id = catapi[0].id;

  var catapimage = request("GET", `https://api.thecatapi.com/v1/images/search?breed_id=${catapi_id}`, {
    headers: { "x-api-key": "2b89c7de-e1e9-4612-a3b7-fb1befa879a0" },
  });
  catapimage = JSON.parse(catapimage.body);

  var catList = await catData.catModel.find();

  var newCat = new catData.catModel({
    src: catapimage[0].url,
    name: req.body.name,
    department: req.body.department,
    race: req.body.race,
    gender: req.body.gender,
    poils: req.body.poils,
    age: req.body.age,
    description: catapi[0].description,
  });
  await newCat.save();

  catList = await catData.catModel.find();

  res.render("adopter", { catList, name: req.session.name });
});

router.get("/contact", function (req, res, next) {
  res.render("contact", { name: req.session.name });
});

router.get("/signout", function (req, res, next) {
  req.session.name = "";
  res.render("index", { name: req.session.name });
});

router.get("/signin", function (req, res, next) {
  res.render("signin", { name: req.session.name });
});

router.post("/signin", function (req, res, next) {
  if (req.body.name) {
    req.session.name = req.body.name;
    res.redirect("adopter");
  }
  res.render("signin", { name: req.session.name });
});

module.exports = router;
