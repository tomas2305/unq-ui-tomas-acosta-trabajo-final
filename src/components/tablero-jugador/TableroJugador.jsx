import Tablero from "../tablero/Tablero";
import { useState } from "react";
import useAlert from "../../services/alert/useAlert";
import { useGameContext } from "../../context/game/useGameContext";
import useTableroService from "../../services/tablero/useTablero.service";

export default function TableroJugador() {
  const { selectedBarco } = useGameContext();
  const { colocarBarcoEnTablero } =  useTableroService();
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

  const colocarBarco = (celdaInicio, barco) => {
    try {
      const nuevoTablero = colocarBarcoEnTablero(
        tablero,
        celdaInicio,
        barco
      );
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
    />
  );
}
