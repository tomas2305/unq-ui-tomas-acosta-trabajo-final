import Barco from "../../components/barcos/Barco";

export default function useTableroService() {
  const colocarBarcoEnTablero = (tablero, celdaInicio, barco) => {
    const params = { tablero, celdaInicio, barco };
    validarCeldas(params);
    return colocarBarco(params);
  };

  const colocarBarcosEnCeldasRandom = (tablero, barcos) => {
    const barcosGirados = getRandomDireccionBarcos(barcos);
    let newTablero = tablero;
    barcosGirados.forEach((barco) => {
      newTablero = colocarBarcoEnTableroEnCeldaRandom(newTablero, barco);
      console.log(barco);
    });
    return newTablero;
  };

  const colocarBarcoEnTableroEnCeldaRandom = (tablero, barco) => {
    const celdaInicio = getCeldaRandomDelTablero(tablero);
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

    return nuevoTablero;
  };

  const validarCeldas = (params) => {
    recorrerCeldas(params, (fila, columna) => {
      if (!params.tablero[fila]?.celdas[columna]) {
        console.log(
          "--------------ERROR FUERA DE RANGO!------------------------"
        );
        throw new Error("Fuera de rango");
      } else if (params.tablero[fila].celdas[columna].contenido) {
        console.log("--------------ERROR POSICION!------------------------");
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

  const getCeldaRandomDelTablero = (tablero) => {
    const randomFila = Math.floor(Math.random() * 10);
    const randomCol = Math.floor(Math.random() * 10);
    const celda = tablero[randomFila].celdas[randomCol];
    return celda;
  };

  const getRandomDireccionBarcos = (barcos) => {
    const barcosGirados = barcos.map((barco) => getRandomDireccionBarco(barco));
    return barcosGirados;
  };

  const getRandomDireccionBarco = (barco) => {
    const randomNum = Math.round(Math.random());
    barco.horizontal = randomNum === 1;
    return barco;
  };

  return {
    colocarBarcoEnTablero,
    colocarBarcosEnCeldasRandom,
  };
}
