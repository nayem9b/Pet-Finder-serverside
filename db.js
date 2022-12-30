const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "trapqueen7",
  host: "localhost",
  port: 5432,
  database: "petfinder",
});
module.exports = pool;
