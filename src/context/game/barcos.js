import colors from "../../styles/colors";

export const portaaviones = {
  tipo: "portaaviones",
  longitud: 5,
  titulo: "Portaaviones",
  horizontal: false,
  color: colors.portaaviones,
  vidas: 5,
};

export const crucero = {
  tipo: "crucero",
  longitud: 4,
  titulo: "Crucero",
  horizontal: false,
  color: colors.crucero,
  vidas: 4,
};

export const submarino = {
  tipo: "submarino",
  longitud: 3,
  titulo: "Submarino",
  horizontal: false,
  color: colors.submarino,
  vidas: 3,
};

export const lancha = {
  tipo: "lancha",
  longitud: 2,
  titulo: "Lancha",
  horizontal: false,
  color: colors.lancha,
  vidas: 2,
};

export const barcosDisponibles = [portaaviones, crucero, submarino, lancha];
