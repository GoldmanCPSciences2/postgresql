const express = require("express");
const db = require("./db");

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", function (req, res, next) {
  db.query("SELECT * FROM movies LIMIT 5", (err, results) => {
    if (err) {
      console.log(err.stack);
    } else {
      res.status(200).json(results.rows);
    }
  });
});

app.listen(PORT);

module.exports = app;
