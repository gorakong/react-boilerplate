const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(cors());
app.use(bodyParser.json());

app.get("/bundle.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/bundle.js"));
});

app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
  if (err) console.log(err);
  console.log("Server connected on port: ", PORT);
});
