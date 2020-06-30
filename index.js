const express = require("express");
const db = require("./db");

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded());

app.get("/student", function (req, res, next) {
  db.query(
    "SELECT * FROM student ORDER BY student_id ASC",
    (error, results) => {
      if (error) {
        console.log(error.stack);
      }
      res.status(200).json(results.rows);
    }
  );
});

app.listen(PORT);

module.exports = app;
