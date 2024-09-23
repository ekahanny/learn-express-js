const express = require("express");
const app = express();

// mendefinisikan request apa yang dijalankan
app.use(() => {
  console.log("Hello World!");
});

// menjalankan server
app.listen(8080, () => {
  console.log("server is running on http://localhost:8080");
});
