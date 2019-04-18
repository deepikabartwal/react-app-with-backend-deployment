const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/first-app/build"));

let count = 0;
const names = [];

const launchMissile = function(req, res) {
  const data = req.body.name;
  count = count + 1;
  names.push(data);
  res.send({names,count});

};
app.use(logger("dev"));

app.post("/add_name", launchMissile);

app.listen(PORT, () => console.log("listening at port", PORT));
