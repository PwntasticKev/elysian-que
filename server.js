/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static("./public"));

app.get("/test", async function (req, res) {
  const allQues = await prisma.que.findMany();
  res.status(200).send(allQues);
});

app.listen(5000, () => {
  console.log(`Server running at http://localhost:5000/`);
});
