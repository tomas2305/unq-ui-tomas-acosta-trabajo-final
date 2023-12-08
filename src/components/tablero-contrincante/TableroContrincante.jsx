import Tablero from "../tablero/Tablero";
import { useEffect, useState } from "react";
import useAlert from "../../services/alert/useAlert";
import useTableroService from "../../services/tablero/useTablero.service";
import { getTableroInicial } from "../../utils/tablero-inicial/tablero-inicial";
import { useGameContext } from "../../context/game/useGameContext";
import { barcosDisponibles } from "../../context/game/barcos";

export default function TableroContrincante() {
  const { colocarBarcosEnCeldasRandom } = useTableroService();
  const { sendAlert } = useAlert();
  const { hasSetBarcos } = useGameContext();
  const [tablero, setTablero] = useState(() => getTableroInicial());

  useEffect(() => {
    if (hasSetBarcos) {
      try {
        const newTablero = colocarBarcosEnCeldasRandom(
          getTableroInicial(),
          barcosDisponibles
        );
        setTablero(newTablero);
      } catch (error) {
        sendAlert(error.message, "error");
      }
      sendAlert("Se coloco corretamente", "success");
    }
  }, [colocarBarcosEnCeldasRandom, hasSetBarcos, sendAlert]);

  return <Tablero tablero={tablero} enabled={false} />;
}
