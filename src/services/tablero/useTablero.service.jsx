import Barco from "../../components/barcos/Barco";
import { useGameContext } from "../../context/game/useGameContext";

export default function useTableroService() {
  const { setBarcos, setSelectedBarco } = useGameContext();

  const colocarBarcoEnTablero = (tablero, celdaInicio, barco) => {
    const params = { tablero, celdaInicio, barco };
    validarCeldas(params);
    return colocarBarco(params);
  };

  const colocarBarco = (params) => {
    const nuevoTablero = [...params.tablero];
    const paramBarco = params.barco;
    const barco = <Barco tipo={paramBarco.tipo} />;

    recorrerCeldas(params, (fila, columna) => {
      nuevoTablero[fila].celdas[columna].contenido = barco;
    });
    setBarcos((barcos) => [...barcos, params.barco]);
    setSelectedBarco(null);

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

  const recorrerCeldas = ({ celdaInicio, barco }, ejecutar) => {
    for (let i = 0; i < barco.longitud; i++) {
      const fila = barco.horizontal
        ? celdaInicio.nroFila
        : celdaInicio.nroFila - i;
      const columna = barco.horizontal
        ? celdaInicio.nroCol + i
        : celdaInicio.nroCol;

      ejecutar(fila, columna);
    }
  };

  return { colocarBarcoEnTablero };
}
