const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const handler = async (req, res) => {
  const { id } = req.query;

  try {
    const page = await prisma.page.findOne({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json(page);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = handler;
