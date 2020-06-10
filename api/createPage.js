import { PrismaClient, PrismaClientRequestError } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const result = await prisma.page.create({
      data: {
        ...req.body,
      },
    });
    res.status(200).json(result);
  } catch (e) {
    console.error(e);
    return res.status(500);
  }
};
