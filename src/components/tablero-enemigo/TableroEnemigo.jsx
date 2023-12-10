import Tablero from "../tablero/Tablero";
import { useEffect, useState } from "react";
import useAlert from "../../services/alert/useAlert";
import { getTableroInicial } from "../../utils/tablero-inicial/tablero-inicial";
import { useGameContext } from "../../context/game/useGameContext";
import { barcosDisponibles } from "../../context/game/barcos";
import {
  colocarBarcosEnCeldasRandom,
  getBarcosInvisibles,
  hacerDisparo,
} from "../../services/tablero/tablero.service";

export default function TableroEnemigo() {
  const { sendAlert } = useAlert();
  const {
    hasSetBarcos,
    hasSetBarcosEnemigo,
    setHasSetBarcosEnemigo,
    esTurnoJugador,
    setBarcosEnemigo,
    setMensaje,
    setEsTurnoJugador,
    activo,
  } = useGameContext();
  const [tablero, setTablero] = useState(() => getTableroInicial());

  useEffect(() => {
    if (hasSetBarcos && !hasSetBarcosEnemigo) {
      try {
        const nuevosBarcos = getBarcosInvisibles(barcosDisponibles);
        console.log(nuevosBarcos);
        const newTablero = colocarBarcosEnCeldasRandom(
          getTableroInicial(),
          nuevosBarcos
        );
        setHasSetBarcosEnemigo(true);
        setBarcosEnemigo(nuevosBarcos);
        setTablero(newTablero);
      } catch (error) {
        sendAlert(error.message, "error");
      }
    }
  }, [
    hasSetBarcos,
    hasSetBarcosEnemigo,
    sendAlert,
    setBarcosEnemigo,
    setHasSetBarcosEnemigo,
  ]);

  const handleDisparo = (celda) => {
    if (celda.tieneDisparo) {
      sendAlert("Esta celda ya tiene un disparo", "error");
    } else {
      const nuevoTablero = hacerDisparo(
        tablero,
        celda,
        setBarcosEnemigo,
        setMensaje
      );
      setEsTurnoJugador(false);
      setTablero(nuevoTablero);
    }
  };

  return (
    <Tablero
      tablero={tablero}
      enabled={hasSetBarcos && esTurnoJugador && activo}
      onClickCelda={handleDisparo}
    />
  );
}
