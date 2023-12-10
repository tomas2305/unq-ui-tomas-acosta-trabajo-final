import Tablero from "../tablero/Tablero";
import { useEffect, useState } from "react";
import useAlert from "../../services/alert/useAlert";
import { useGameContext } from "../../context/game/useGameContext";
import { getTableroInicial } from "../../utils/tablero-inicial/tablero-inicial";
import {
  colocarBarcoEnTablero,
  hacerDisparoEnCeldaRandom,
  tiempoDelay,
} from "../../services/tablero/tablero.service";

export default function TableroJugador() {
  const {
    selectedBarco,
    setBarcos,
    setSelectedBarco,
    hasSetBarcos,
    barcosEnemigo,
    esTurnoJugador,
    setEsTurnoJugador,
    activo,
  } = useGameContext();
  const { sendAlert } = useAlert();
  const [tablero, setTablero] = useState(() => getTableroInicial());

  useEffect(() => {
    const getDisparoDeEnemigo = async () => {
      if (hasSetBarcos && !esTurnoJugador && barcosEnemigo.length !== 0) {
        // await tiempoDelay(1023);
        const newTablero = hacerDisparoEnCeldaRandom(tablero, setBarcos);
        setEsTurnoJugador(true);
        setTablero(newTablero);
      }
    };

    getDisparoDeEnemigo();
  }, [
    activo,
    barcosEnemigo,
    esTurnoJugador,
    hasSetBarcos,
    setBarcos,
    setEsTurnoJugador,
    tablero,
  ]);

  const colocarBarco = (celdaInicio, barco) => {
    try {
      const nuevoTablero = colocarBarcoEnTablero(
        tablero,
        celdaInicio,
        barco,
        true
      );
      setBarcos((barcos) => [...barcos, barco]);
      setSelectedBarco(null);
      setTablero(nuevoTablero);
      sendAlert("Se coloco corretamente", "success");
    } catch (error) {
      sendAlert(error.message, "error");
    }
  };

  return (
    <Tablero
      tablero={tablero}
      onClickCelda={(celda) => colocarBarco(celda, selectedBarco)}
      enabled={!hasSetBarcos && activo && selectedBarco}
    />
  );
}
