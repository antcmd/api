const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const handler = async (req, res) => {
  const result = await prisma.page.create({
    data: {
      ...req.body,
    },
  });
  res.json(result);
};

module.exports = handler;
