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
  const [flotaEnemigaDestruida, setFlotaEnemigaDestruida] = useState(false);
  const [esTurnoJugador, setEsTurnoJugador] = useState(true);
  const [mensaje, setMensaje] = useState("Coloca tus barcos");

  useEffect(() => {
    if (barcos.length === barcosDisponibles.length) {
      setHasSetBarcos(true);
    }
    if (hasSetBarcos) {
      setMensaje("A luchar!");
    }
  }, [barcos, esTurnoJugador, hasSetBarcos]);

  useEffect(() => {
    const sinBarcos = barcos.every((b) => b.vidas === 0);

    if (
      hasSetBarcos &&
      hasSetBarcosEnemigo &&
      (flotaEnemigaDestruida || sinBarcos)
    ) {
      setActivo(false);
      const mensaje = flotaEnemigaDestruida
        ? "Ganaste! Felicidades!! :D"
        : "Perdiste! :(";
      setMensaje(mensaje);
    }
  }, [
    barcos,
    barcosEnemigo,
    flotaEnemigaDestruida,
    hasSetBarcos,
    hasSetBarcosEnemigo,
  ]);

  useEffect(() => {
    if (hasSetBarcosEnemigo) {
      setFlotaEnemigaDestruida(barcosEnemigo.every((b) => b.vidas === 0));
    }
  }, [barcosEnemigo, hasSetBarcosEnemigo]);

  const reset = () => {
    setBarcos([]);
    setBarcosEnemigo([]);
    setHasSetBarcos(false);
    setHasSetBarcosEnemigo(false);
    setEsTurnoJugador(true);
    setActivo(true);
  };

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
      flotaEnemigaDestruida,
      setBarcos,
      setSelectedBarco,
      setBarcosEnemigo,
      setFlotaEnemigaDestruida,
      setMensaje,
      setEsTurnoJugador,
      setActivo,
      setHasSetBarcosEnemigo,
      reset,
    }),
    [
      activo,
      barcos,
      barcosEnemigo,
      esTurnoJugador,
      flotaEnemigaDestruida,
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
