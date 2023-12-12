import Tablero from "../tablero/Tablero";
import { useEffect, useState } from "react";
import useAlert from "../../services/alert/useAlert";
import { getTableroInicial } from "../../utils/tablero-inicial/tablero-inicial";
import { useGameContext } from "../../context/game/useGameContext";
import { barcosDisponibles } from "../../context/game/barcos";
import {
  colocarBarcosEnCeldasRandom,
  esFlotaDestruida,
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
    barcosEnemigo,
    setEsTurnoJugador,
    activo,
  } = useGameContext();
  const [tablero, setTablero] = useState(() => getTableroInicial());

  useEffect(() => {
    if (hasSetBarcos && !hasSetBarcosEnemigo) {
      try {
        const nuevosBarcos = getBarcosInvisibles(barcosDisponibles);
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
      sendAlert("Esta celda ya fue seleccionada", "error");
    } else {
      const { nuevoTablero, newBarcos } = hacerDisparo(
        tablero,
        celda,
        barcosEnemigo
      );
      setBarcosEnemigo(newBarcos);
      setTablero(nuevoTablero);
      const turno = esFlotaDestruida(newBarcos);
      setEsTurnoJugador(turno);
    }
  };

  return (
    <Tablero
      focus={esTurnoJugador && activo && hasSetBarcosEnemigo}
      tablero={tablero}
      enabled={hasSetBarcos && esTurnoJugador && activo}
      onClickCelda={handleDisparo}
    />
  );
}
