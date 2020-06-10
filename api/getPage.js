const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const handler = async (req, res) => {
  const { id } = req.query;
  const { id: paramsId } = req.params;

  try {
    const user = await prisma.page.findOne({
      where: {
        id: parseInt(id || paramsId),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = handler;
