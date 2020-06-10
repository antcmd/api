const { PrismaClient, PrismaClientRequestError } = require("@prisma/client");
const prisma = new PrismaClient();

const handler = async (req, res) => {
  try {
    const result = await prisma.page.create({
      data: {
        ...req.body,
      },
    });

    res.status(200).json(result);
  } catch (e) {
    if (e instanceof PrismaClientRequestError) {
      if (e.code === "P2002") {
        return res
          .status(409)
          .json({ error: "A user with this email already exists" });
      }
    }
    console.error(e);
    return res.status(500);
  }
};

module.exports = handler;
