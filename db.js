const Pool = require("pg").Pool;
const db = new Pool({
  database: "gmdb",
  password: "123",
  host: "localhost",
  port: 5433,
});

module.exports = db;
