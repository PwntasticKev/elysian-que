const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static("./public"));

app.get("/test", function (req, res) {
  console.log("gettin smacked");
  res.sendStatus(200);
});

app.listen(5000, () => {
  console.log(`Server running at http://localhost:5000/`);
});
