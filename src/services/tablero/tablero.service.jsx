import Barco from "../../components/barcos/Barco";

export const colocarBarcoEnTablero = (
  tablero,
  celdaInicio,
  horizontal,
  barco
) => {
  const params = { tablero, celdaInicio, horizontal, barco };
  validarCeldas(params);
  return colocarBarco(params);
};

const colocarBarco = (params) => {
  const nuevoTablero = [...params.tablero];
  const paramBarco = params.barco;
  const barco = <Barco tipo={paramBarco.tipo} />;
  console.log(barco);

  recorrerCeldas(params, (fila, columna) => {
    nuevoTablero[fila].celdas[columna].contenido = barco;
  });
  return nuevoTablero;
};

const validarCeldas = (params) => {
  recorrerCeldas(params, (fila, columna) => {
    if (!params.tablero[fila]?.celdas[columna]) {
      throw new Error("Fuera de rango");
    } else if (params.tablero[fila].celdas[columna].contenido) {
      throw new Error("No se puede colocar el barco en esta posicion");
    }
  });
};

const recorrerCeldas = ({ celdaInicio, horizontal, barco }, ejecutar) => {
  for (let i = 0; i < barco.longitud; i++) {
    const fila = horizontal ? celdaInicio.nroFila : celdaInicio.nroFila - i;
    const columna = horizontal ? celdaInicio.nroCol + i : celdaInicio.nroCol;

    ejecutar(fila, columna);
  }
};
