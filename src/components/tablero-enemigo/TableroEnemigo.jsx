import Tablero from "../tablero/Tablero";
import { useEffect, useState } from "react";
import useAlert from "../../services/alert/useAlert";
import { getTableroInicial } from "../../utils/tablero-inicial/tablero-inicial";
import { useGameContext } from "../../context/game/useGameContext";
import { barcosDisponibles } from "../../context/game/barcos";
import {
  colocarBarcosEnCeldasRandom,
  hacerDisparo,
} from "../../services/tablero/tablero.service";

export default function TableroEnemigo() {
  const { sendAlert } = useAlert();
  const { hasSetBarcos, esTurnoJugador, setBarcosEnemigo } = useGameContext();
  const [tablero, setTablero] = useState(() => getTableroInicial());
  const [tableroConfigurado, setTableroConfigurado] = useState(false);

  useEffect(() => {
    if (hasSetBarcos && !tableroConfigurado) {
      try {
        const nuevosBarcos = barcosDisponibles;
        const newTablero = colocarBarcosEnCeldasRandom(
          getTableroInicial(),
          nuevosBarcos
        );
        setTableroConfigurado(true);
        setBarcosEnemigo(nuevosBarcos);
        setTablero(newTablero);
      } catch (error) {
        sendAlert(error.message, "error");
      }
      sendAlert("Se coloco corretamente", "success");
    }
  }, [hasSetBarcos, sendAlert, setBarcosEnemigo, tableroConfigurado]);

  const handleDisparo = (celda) => {
    const nuevoTablero = hacerDisparo(tablero, celda, setBarcosEnemigo);
    setTablero(nuevoTablero);
  };

  return (
    <Tablero
      tablero={tablero}
      enabled={hasSetBarcos && esTurnoJugador}
      onClickCelda={handleDisparo}
    />
  );
}
