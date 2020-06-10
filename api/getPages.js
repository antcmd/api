import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const pages = await prisma.page.findMany();
    res.status(200).json(pages);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
