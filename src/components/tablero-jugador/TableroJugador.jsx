import Tablero from "../tablero/Tablero";
import { useState } from "react";
import useAlert from "../../services/alert/useAlert";
import { useGameContext } from "../../context/game/useGameContext";
import useTableroService from "../../services/tablero/useTablero.service";
import { getTableroInicial } from "../../utils/tablero-inicial/tablero-inicial";

export default function TableroJugador() {
  const { selectedBarco, setBarcos, setSelectedBarco } = useGameContext();
  const { colocarBarcoEnTablero } = useTableroService();
  const { sendAlert } = useAlert();
  const [tablero, setTablero] = useState(() => getTableroInicial());

  const colocarBarco = (celdaInicio, barco) => {
    try {
      const nuevoTablero = colocarBarcoEnTablero(tablero, celdaInicio, barco);
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
      enabled={selectedBarco}
    />
  );
}
