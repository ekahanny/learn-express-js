const express = require("express");
const res = require("express/lib/response");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

// mengatur posisi folder views
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

app.get("/t/:tag", (req, res) => {
  const { tag } = req.params;
  res.render("tag", { tag });
});

app.listen(8080, () => {
  console.log(`listening on port http://localhost:8080`);
});
