import { useEffect, useMemo, useState } from "react";
import { gameContext } from "./gameContext";
import { barcosDisponibles } from "./barcos";

export function GameProvider({ children }) {
  const [barcos, setBarcos] = useState([]);
  const [barcosEnemigo, setBarcosEnemigo] = useState([]);
  const [selectedBarco, setSelectedBarco] = useState(null);
  const [hasSetBarcos, setHasSetBarcos] = useState(true);
  const [esTurnoJugador, setEsTurnoJugador] = useState(true);

  useEffect(() => {
    if (barcos.length === barcosDisponibles.length) {
      setEsTurnoJugador(true);
      setHasSetBarcos(true);
    }
  }, [barcos]);

  const contextValue = useMemo(
    () => ({
      selectedBarco,
      barcos,
      esTurnoJugador,
      hasSetBarcos,
      barcosEnemigo,
      setBarcos,
      setSelectedBarco,
      setEsTurnoJugador,
      setBarcosEnemigo,
    }),
    [barcos, barcosEnemigo, esTurnoJugador, hasSetBarcos, selectedBarco]
  );

  return (
    <gameContext.Provider value={contextValue}>{children}</gameContext.Provider>
  );
}
