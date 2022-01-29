/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { PrismaClient } = require("@prisma/client");
const dateTime = require("node-datetime");

const prisma = new PrismaClient();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static("./public"));

app.get("/test", async function (req, res) {
  const date = dateTime.create().format("Y-m-d H:M:S");
  console.log("yee", typeof date);
  const allQues = await prisma.que.findMany();
  res.status(200).send(allQues);
});

app.put("/waitlist", async (req, res) => {
  const { email, name, id } = req.body;
  const que = await prisma.que
    .findMany({
      where: {
        id,
      },
      take: 1,
    })
    .then((_) => _[0]);

  const date = dateTime.create().format("Y-m-d H:M:S");

  console.log(date);
  await prisma.que.update({
    data: {
      waiting_list: JSON.stringify([
        ...JSON.parse(que.waiting_list),
        { name, email, claimTime: date },
      ]),
      status: "Claimed",
      claimed_by: que.name,
    },
    where: {
      id: que.id,
    },
  });

  if (res.status == 200) return res.sendStatus(200).send();
});

app.listen(5000, () => {
  console.log(`Server running at http://localhost:5000/`);
});
