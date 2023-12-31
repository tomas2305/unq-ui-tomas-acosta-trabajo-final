import Barco from "../../components/barcos/Barco";
import Disparo from "../../components/disparo/Disparo";

export const colocarBarcosEnCeldasRandom = (tablero, barcos) => {
  setRandomDireccionBarcos(barcos);
  let newTablero = tablero;

  barcos.forEach((barco) => {
    const temp = colocarBarcoEnTableroEnCeldaRandom(newTablero, barco);
    newTablero = temp;
  });
  return newTablero;
};

const colocarBarcoEnTableroEnCeldaRandom = (tablero, barco) => {
  const celdaInicio = getCeldaRandomValidaParaBarco(tablero, barco);
  return colocarBarco(tablero, celdaInicio, barco);
};

export const colocarBarcoEnTablero = (
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
  const nuevoTablero = colocarBarco(tablero, celdaInicio, barco);

  return nuevoTablero;
};

const colocarBarco = (tablero, celdaInicio, barco) => {
  const nuevoTablero = [...tablero];
  const barcoComp = <Barco barco={barco} />;

  recorrerCeldas(
    celdaInicio,
    barco.longitud,
    barco.horizontal,
    (fila, columna) => {
      nuevoTablero[fila].celdas[columna].contenido = barcoComp;
      nuevoTablero[fila].celdas[columna].tieneBarco = true;
    }
  );

  return nuevoTablero;
};

const validarCeldas = (
  tablero,
  celdaInicio,
  cantidad,
  horizontal,
  lanzarExcepcion = false
) => {
  let esPosicionValida = true;
  let mensajeExcepcion = "";

  recorrerCeldas(celdaInicio, cantidad, horizontal, (fila, columna) => {
    if (!tablero[fila]?.celdas[columna]) {
      esPosicionValida = false;
      mensajeExcepcion = "Fuera de rango";
    } else if (tablero[fila].celdas[columna].contenido) {
      esPosicionValida = false;
      mensajeExcepcion = "No se puede colocar el barco en esta posicion";
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

const getCeldaRandomValidaParaBarco = (tablero, barco) => {
  let celda = getCeldaRandomDelTablero(tablero);
  let intentos = 0;
  let esValida = validarCeldas(
    tablero,
    celda,
    barco.longitud,
    barco.horizontal,
    false
  );

  while (!esValida && intentos !== 100) {
    celda = getCeldaRandomDelTablero(tablero);
    esValida = validarCeldas(
      tablero,
      celda,
      barco.longitud,
      barco.horizontal,
      false
    );
    intentos++;
  }

  if (intentos === 100) {
    throw new Error("Algo salio mal");
  }

  return celda;
};

const getCeldaRandomDelTablero = (tablero) => {
  const randomFila = Math.floor(Math.random() * 10);
  const randomCol = Math.floor(Math.random() * 10);
  const celda = tablero[randomFila].celdas[randomCol];
  return celda;
};

const setRandomDireccionBarcos = (barcos) => {
  barcos.forEach((barco) => setRandomDireccionBarco(barco));
};

const setRandomDireccionBarco = (barco) => {
  const randomNum = Math.round(Math.random());
  barco.horizontal = randomNum === 1;
};

export const hacerDisparo = (tablero, celda, barcos) => {
  let newBarcos = barcos;
  const nuevoTablero = [...tablero];
  const celdaTablero = nuevoTablero[celda.nroFila].celdas[celda.nroCol];
  if (celda.tieneBarco && !celda.tieneDisparo) {
    newBarcos = getGolpeEnBarco(celda.contenido, newBarcos);
  }
  if (!celdaTablero.tieneDisparo) {
    nuevoTablero[celda.nroFila].celdas[celda.nroCol].contenido = (
      <Disparo esAcertado={celda.tieneBarco} />
    );
    nuevoTablero[celda.nroFila].celdas[celda.nroCol].tieneDisparo = true;
  }
  return { nuevoTablero, newBarcos };
};

const getGolpeEnBarco = (barcoComp, barcos) => {
  const barco = barcoComp.props.barco;
  return quitarVidaDeBarco(barco, barcos);
};

const quitarVidaDeBarco = (barco, barcos) => {
  const newBarcos = barcos.map((b) => {
    if (b.tipo === barco.tipo) {
      return { ...b, vidas: b.vidas - 1 };
    }
    return b;
  });
  return newBarcos;
};

export const hacerDisparoEnCeldaRandom = (tablero, barcos) => {
  const celdaRandom = getCeldaRandomValidaParaDisparo(tablero);
  return hacerDisparo(tablero, celdaRandom, barcos);
};

const getCeldaRandomValidaParaDisparo = (tablero) => {
  let celda = getCeldaRandomDelTablero(tablero);
  let intentos = 0;

  while (celda.tieneDisparo && intentos !== 500) {
    celda = getCeldaRandomDelTablero(tablero);
    intentos++;
  }
  return celda;
};

export const tiempoDelay = (milisengundos) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milisengundos);
  });
};

export const getBarcosInvisibles = (barcos) => {
  return barcos.map((barco) => ({ ...barco, invisible: true }));
};

export const esFlotaDestruida = (barcos) => {
  return barcos.every((b) => b.vidas === 0);
};
