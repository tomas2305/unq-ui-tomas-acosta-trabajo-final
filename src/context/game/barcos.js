import colors from "../../styles/colors";

export const portaaviones = {
  tipo: "portaaviones",
  longitud: 5,
  titulo: "Portaaviones",
  horizontal: false,
  color: colors.portaaviones,
};

export const crucero = {
  tipo: "crucero",
  longitud: 4,
  titulo: "Crucero",
  horizontal: false,
  color: colors.crucero,
};

export const submarino = {
  tipo: "submarino",
  longitud: 3,
  titulo: "Submarino",
  horizontal: false,
  color: colors.submarino,
};

export const lancha = {
  tipo: "lancha",
  longitud: 2,
  titulo: "Lancha",
  horizontal: false,
  color: colors.lancha,
};

export const barcosDisponibles = [portaaviones, crucero, submarino, lancha];
