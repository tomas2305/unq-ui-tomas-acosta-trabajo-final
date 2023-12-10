import { useEffect, useMemo, useState } from "react";
import { gameContext } from "./gameContext";
import { barcosDisponibles } from "./barcos";

export function GameProvider({ children }) {
  const [activo, setActivo] = useState(true);
  const [barcos, setBarcos] = useState([]);
  const [barcosEnemigo, setBarcosEnemigo] = useState([]);
  const [selectedBarco, setSelectedBarco] = useState(null);
  const [hasSetBarcos, setHasSetBarcos] = useState(false);
  const [hasSetBarcosEnemigo, setHasSetBarcosEnemigo] = useState(false);
  const [esTurnoJugador, setEsTurnoJugador] = useState(true);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (barcos.length === barcosDisponibles.length) {
      setHasSetBarcos(true);
    }
    if (hasSetBarcos) {
      const nuevoMensaje = esTurnoJugador ? "Tu turno" : "Turno del enemigo";
      setMensaje(nuevoMensaje);
    }
  }, [barcos, esTurnoJugador, hasSetBarcos]);

  useEffect(() => {
    const sinBarcosEnemigos = barcosEnemigo.length === 0;
    const sinBarcos = barcos.length === 0;

    if (
      hasSetBarcos &&
      hasSetBarcosEnemigo &&
      (sinBarcosEnemigos || sinBarcos)
    ) {
      setActivo(false);
      const mensaje = sinBarcosEnemigos
        ? "Ganaste! Felicidades!! :D"
        : "Perdiste! :(";
      setMensaje(mensaje);
    }
  }, [barcos, barcosEnemigo, hasSetBarcos, hasSetBarcosEnemigo]);

  const contextValue = useMemo(
    () => ({
      selectedBarco,
      barcos,
      esTurnoJugador,
      hasSetBarcos,
      hasSetBarcosEnemigo,
      barcosEnemigo,
      mensaje,
      activo,
      setBarcos,
      setSelectedBarco,
      setBarcosEnemigo,
      setMensaje,
      setEsTurnoJugador,
      setActivo,
      setHasSetBarcosEnemigo,
    }),
    [
      activo,
      barcos,
      barcosEnemigo,
      esTurnoJugador,
      hasSetBarcos,
      hasSetBarcosEnemigo,
      mensaje,
      selectedBarco,
    ]
  );

  return (
    <gameContext.Provider value={contextValue}>{children}</gameContext.Provider>
  );
}
