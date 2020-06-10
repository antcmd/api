const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const handler = async (req, res) => {
  try {
    const pages = await prisma.page.findMany();
    res.json(pages);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = handler;
