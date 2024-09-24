const express = require("express");
const app = express();

app.set("view engine", "ejs");

// route
app.get("/", (req,res) => {
  res.render('home')
})

app.listen(8080, () => {
  console.log(`listening on port http://localhost:8080`);
});
