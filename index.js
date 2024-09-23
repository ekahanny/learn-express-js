const express = require("express");
const app = express();

// mendefinisikan request apa yang dijalankan serta respon apa yg diterima
// app.use((req, res) => {
//   console.log("Hello World!");
//   res.send('<h1>Hello World!</h1>')
// });

//routing
app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.get("/cats", (req, res) => {
  res.send("this is cats page");
});

app.post("/cats", (req, res) => {
  res.send("this is cats page from post");
});

// menjalankan server
app.listen(8080, () => {
  console.log("server is running on http://localhost:8080");
});

// membuat handling page untuk route yang tidak terdaftar
app.get("*", (req, res) => {
  res.send("Halaman tidak ditemukan");
});
