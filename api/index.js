export default async (req, res) => {
  res.status(200).json({ up: true });
};

// const express = require("express");
// const bodyParser = require("body-parser");
// const { PrismaClient } = require("@prisma/client");

// const getPages = require("./getPages");
// const getPage = require("./getPage");
// const createPage = require("./createPage");

// const prisma = new PrismaClient();
// const app = express();

// app.use(bodyParser.json());

// app.get("/pages", getPages);
// app.get("/pages/:id", getPage);
// app.post(`/pages`, createPage);

// const server = app.listen(3000, () =>
//   console.log("🚀 Server ready at: http://localhost:3000")
// );
