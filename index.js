const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
// MiddleWare
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("My app is running on homepage");
});

app.listen(port, () => {
  console.log("Server is working");
});
