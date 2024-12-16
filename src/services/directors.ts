import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDirectors = async () => {
  try {
    const directores = await prisma.director.findMany({
      select: {
        name: true,
        lastname: true,
        age: true,
      },
    });
    return directores;
  } catch (error) {
    console.error("Error to get data");
    return [];
  }
};

export const createDirector = async ({
  name,
  lastname,
  age,
}: {
  name: string;
  lastname: string | null;
  age: number;
}) => {
  try {
    await prisma.director.create({
      data: {
        name,
        lastname,
        age,
      },
    });
  } catch (error) {
    console.error("Error to create a director");
  }
};
