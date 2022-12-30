const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const port = process.env.PORT || 5000;
// MiddleWare
app.use(cors());
app.use(express.json());

// Routes
app.post("/post", async (req, res) => {
  try {
    const { post } = req.body;
    console.log(req.body);
    const newPost = await pool.query(
      "INSERT INTO finder (description) VALUES($1) RETURNING *",
      [post]
    );
    res.json(newPost.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/", async (req, res) => {
  res.send("My app is running on homepage");
});

app.listen(port, () => {
  console.log("Server is working");
});
