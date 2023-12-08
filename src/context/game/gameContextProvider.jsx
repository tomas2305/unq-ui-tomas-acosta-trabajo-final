import { useEffect, useMemo, useState } from "react";
import { gameContext } from "./gameContext";
import { barcosDisponibles } from "./barcos";

export function GameProvider({ children }) {
  const [barcos, setBarcos] = useState([]);
  const [selectedBarco, setSelectedBarco] = useState(null);
  const [hasSetBarcos, setHasSetBarcos] = useState(true);

  useEffect(() => {
    if (barcos.length === barcosDisponibles.length) {
      setHasSetBarcos(true);
    }
  }, [barcos]);

  const contextValue = useMemo(
    () => ({
      selectedBarco,
      barcos, 
      hasSetBarcos,
      setBarcos,
      setSelectedBarco,
    }),
    [barcos, hasSetBarcos, selectedBarco]
  );

  return (
    <gameContext.Provider value={contextValue}>{children}</gameContext.Provider>
  );
}
