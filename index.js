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

// routing dengan parameter
app.get("/blog/:kategori/:author/:judul", (req, res) => {
  const { kategori, author, judul } = req.params;
  res.send(
    `Kita sedang melihat postingan dengan kategori: ${kategori} - author: ${author} - judul: ${judul}`
  );
});

// menampilkan data dgn query string
app.get("/search", (req, res) => {
  //   console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send(`<h1>Tidak ada data yang dicari!</h1>`);
  }
  res.send(`<h1>Search keywords: ${q}</h1>`);
});

// menjalankan server
app.listen(8080, () => {
  console.log("server is running on http://localhost:8080");
});

// membuat handling page untuk route yang tidak terdaftar
app.get("*", (req, res) => {
  res.send("Halaman tidak ditemukan");
});
