const express = require("express");
const db = require("./db");

const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded());

app.get("/students", function (req, res, next) {
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

app.get("/students/:id", function (req, res, next) {
  const studentid = parseInt(req.params.id, 10);
  db.query(
    `SELECT * FROM student WHERE student_id = ${studentid}`,
    (error, results) => {
      if (error) {
        console.log(error.stack);
      }
      res.status(200).json(results.rows);
    }
  );

  app.get("/grades/:id", function (req, res, next) {
    const studentid = parseInt(req.params.id, 10);
    db.query(
      `SELECT grade FROM grade WHERE student_id = ${studentid}`,
      (error, results) => {
        if (error) {
          console.log(error.stack);
        }
        res.status(200).json(results.rows);
      }
    );
  });
});

app.listen(PORT);

module.exports = app;
