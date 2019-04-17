const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname + "/first-app/build"));

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

const sayHello = function(req, res) {
  res.send({ message: "Welcome to the page" });
};

app.get("/get_data", (req, res) => {
  res.send({ data: "Welcome To This Page" });
});

app.listen(PORT, () => console.log("listening at port", PORT));
