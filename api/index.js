export default async (req, res) => {
  res.status(200).json({ up: true });
};

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { PrismaClient } = require("@prisma/client");

// const getPages = require("./getPages");
// const getPage = require("./getPage");
// const createPage = require("./createPage");

// const prisma = new PrismaClient();
// const app = express();

// var corsOptions = {
//   origin: "http://example.com",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors({ origin: ["http://antcmd.now.sh/", "http://antglobe.now.sh/"] }));

// app.use(bodyParser.json());

// app.get("/pages", getPages);
// app.get("/pages/:id", getPage);
// app.post("/pages", createPage);
// app.get("/page-create", createPage);

// const server = app.listen(3000, () =>
//   console.log("🚀 Server ready at: http://localhost:3000")
// );
