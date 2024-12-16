import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getMovies = async () => {
  try {
    const movies = await prisma.movie.findMany();
    return movies;
  } catch (error) {
    console.log("Error al obtener las peliculas");
    return [];
  }
};
