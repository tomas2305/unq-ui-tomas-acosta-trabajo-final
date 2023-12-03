import Tablero from "../tablero/Tablero";
import { useState } from "react";
import useAlert from "../../services/alert/useAlert";
import { colocarBarcoEnTablero } from "../../services/tablero/tablero.service";
import { useGameContext } from "../../context/game/useGameContext";

export default function TableroJugador() {
  const { selectedBarco, setBarcos, setSelectedBarco } = useGameContext();
  const { sendAlert } = useAlert();
  const [tablero, setTablero] = useState(() => {
    const filas = Array(10).fill(null);
    const tableroInicial = filas.map((fila, filaIndex) => {
      return {
        nroFila: filaIndex,
        celdas: Array(10)
          .fill(null)
          .map((celda, colIndex) => {
            return {
              nroFila: filaIndex,
              nroCol: colIndex,
              contenido: null,
            };
          }),
      };
    });
    return tableroInicial;
  });

  const colocarBarco = (celdaInicio, horizontal, barco) => {
    try {
      const nuevoTablero = colocarBarcoEnTablero(
        tablero,
        celdaInicio,
        horizontal,
        barco
      );
      setTablero(nuevoTablero);
      sendAlert("Se coloco corretamente", "success");
      setBarcos((barcos) => [...barcos, barco]);
      setSelectedBarco(null);
    } catch (error) {
      sendAlert(error.message, "error");
    }
  };

  return (
    <Tablero
      tablero={tablero}
      onClickCelda={(celda) => colocarBarco(celda, false, selectedBarco)}
    />
  );
}
