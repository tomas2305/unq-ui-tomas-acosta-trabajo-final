import Barco from "../../components/barcos/Barco";

export default function useTableroService() {
  const colocarBarcosEnCeldasRandom = (tablero, barcos) => {
    const barcosGirados = getRandomDireccionBarcos(barcos);
    let newTablero = tablero;
    // barcosGirados.forEach((barco) => {
    //   newTablero = colocarBarcoEnTableroEnCeldaRandom(newTablero, barco);
    // });
    newTablero = colocarBarcoEnTableroEnCeldaRandom(newTablero, barcos[0]);
    return newTablero;
  };

  const colocarBarcoEnTableroEnCeldaRandom = (tablero, barco) => {
    const celdaInicio = getCeldaRandomValidaParaBarco(
      tablero,
      barco.longitud,
      barco.horizontal
    );
    return colocarBarcoEnTablero(tablero, celdaInicio, barco, false);
  };

  const colocarBarcoEnTablero = (
    tablero,
    celdaInicio,
    barco,
    lanzarExcepcion
  ) => {
    const longitudBarco = barco.longitud;
    const esHorizontal = barco.horizontal;
    validarCeldas(
      tablero,
      celdaInicio,
      longitudBarco,
      esHorizontal,
      lanzarExcepcion
    );
    const nuevoTablero = [...tablero];
    const paramBarco = barco;
    const barcoComp = <Barco tipo={paramBarco.tipo} />;

    recorrerCeldas(
      celdaInicio,
      longitudBarco,
      esHorizontal,
      (fila, columna) => {
        nuevoTablero[fila].celdas[columna].contenido = barcoComp;
      }
    );

    return nuevoTablero;
  };

  const validarCeldas = (
    tablero,
    celdaInicio,
    cantidad,
    horizontal,
    lanzarExcepcion
  ) => {
    let esPosicionValida = true;
    let mensajeExcepcion = "";

    recorrerCeldas(celdaInicio, cantidad, horizontal, (fila, columna) => {
      if (!tablero[fila]?.celdas[columna]) {
        esPosicionValida = false;
        mensajeExcepcion = "Fuera de rango";
        console.log(mensajeExcepcion);
      } else if (tablero[fila].celdas[columna].contenido) {
        esPosicionValida = false;
        mensajeExcepcion = "No se puede colocar el barco en esta posicion";
        console.log(mensajeExcepcion);
      }
    });

    if (!esPosicionValida && lanzarExcepcion) {
      throw new Error(mensajeExcepcion);
    }

    return esPosicionValida;
  };

  const recorrerCeldas = (celdaInicio, cantidad, horizontal, ejecutar) => {
    for (let i = 0; i < cantidad; i++) {
      const fila = horizontal ? celdaInicio.nroFila : celdaInicio.nroFila - i;
      const columna = horizontal ? celdaInicio.nroCol + i : celdaInicio.nroCol;

      ejecutar(fila, columna);
    }
  };

  const getCeldaRandomValidaParaBarco = (tablero, longitud, esHorizontal) => {
    let celda = getCeldaRandomDelTablero(tablero);
    console.log(validarCeldas(tablero, celda, longitud, esHorizontal, false));

    // do {
    //   // celda = getCeldaRandomDelTablero(tablero);
    //   // console.log(celda);
    //   // console.log(validarCeldas(tablero, celda, longitud, esHorizontal, false));
    // } while (!validarCeldas(tablero, celda, longitud, esHorizontal, false));

    return celda;
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
