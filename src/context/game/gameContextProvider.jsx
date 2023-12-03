import { useMemo, useState } from "react";
import { gameContext } from "./gameContext";

export function GameProvider({ children }) {
  const [barcos, setBarcos] = useState([]);
  const [selectedBarco, setSelectedBarco] = useState(null);

  const contextValue = useMemo(
    () => ({ selectedBarco, barcos, setBarcos, setSelectedBarco }),
    [barcos, selectedBarco]
  );

  return (
    <gameContext.Provider value={contextValue}>{children}</gameContext.Provider>
  );
}
