export const formatDirectors = (
  directors: {
    name: string;
    lastname: string | null;
    age: number;
  }[]
) => {
  return directors.map((director) => ({
    Nombre: director.name || "No disponible",
    Apellido: director.lastname || "No disponible",
    Edad: director.age ? `${director.age} años` : "No disponible",
  }));
};
