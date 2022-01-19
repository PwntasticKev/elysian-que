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

app.put("/waitlist", async (req, res) => {
  console.log("REQ BODY BABY", req.body);
  const { email, name, id } = req.body;
  const que = await prisma.que
    .findMany({
      where: {
        id: req.body.id,
      },
      take: 1,
    })
    .then((_) => _[0]);

  if (que) {
    console.log("after", que);
    await prisma.que.update({
      where: {
        id,
      },
      data: {
        waiting_list: que.waiting_list.push({ name, email }),
      },
    });

    if (res.status == 200) return res.sendStatus(200).send("");
  }
});

app.listen(5000, () => {
  console.log(`Server running at http://localhost:5000/`);
});
