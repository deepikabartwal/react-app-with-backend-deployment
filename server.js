const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const logger = require('morgan');
app.use(express.static(__dirname + "/first-app/build"));


let count =  0;

const sendIncreasedCount =function(req,res){
  count = count+1;
  res.send({count});
}
app.use(logger("dev"));

app.get("/increase_count",sendIncreasedCount);

app.listen(PORT, () => console.log("listening at port", PORT));
