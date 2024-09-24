const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

// mengatur posis folder views
app.set("views", path.join(__dirname, "/views"));

// route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  // passing data ke template, di template random, panggil variabel bernama random
  res.render("random", { random: num });
});

app.listen(8080, () => {
  console.log(`listening on port http://localhost:8080`);
});
