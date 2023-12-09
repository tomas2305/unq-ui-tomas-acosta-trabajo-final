import Tablero from "../tablero/Tablero";
import { useEffect, useState } from "react";
import useAlert from "../../services/alert/useAlert";
import { getTableroInicial } from "../../utils/tablero-inicial/tablero-inicial";
import { useGameContext } from "../../context/game/useGameContext";
import { barcosDisponibles } from "../../context/game/barcos";
import { colocarBarcosEnCeldasRandom } from "../../services/tablero/useTablero.service";

export default function TableroContrincante() {
  const { sendAlert } = useAlert();
  const { hasSetBarcos } = useGameContext();
  const [tablero, setTablero] = useState(() => getTableroInicial());
  const [tableroConfigurado, setTableroConfigurado] = useState(false);

  useEffect(() => {
    if (hasSetBarcos && !tableroConfigurado) {
      try {
        const newTablero = colocarBarcosEnCeldasRandom(
          getTableroInicial(),
          barcosDisponibles
        );
        setTableroConfigurado(true);
        setTablero(newTablero);
      } catch (error) {
        sendAlert(error.message, "error");
      }
      sendAlert("Se coloco corretamente", "success");
    }
  }, [hasSetBarcos, sendAlert, tableroConfigurado]);

  return <Tablero tablero={tablero} enabled={false} />;
}
