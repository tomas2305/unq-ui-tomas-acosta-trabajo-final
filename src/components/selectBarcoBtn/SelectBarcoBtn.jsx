import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useGameContext } from "../../context/game/useGameContext";

export default function SelectBarcoBtn({ text, barco }) {
  const [disabled, setDisabled] = useState(false);
  const { barcos, setSelectedBarco, hasSetBarcos, selectedBarco } =
    useGameContext();

  useEffect(() => {
    const disabledValue =
      barcos.some((b) => b.tipo === barco?.tipo) || hasSetBarcos;
    setDisabled(disabledValue);
  }, [barco, barcos, hasSetBarcos, selectedBarco]);

  return (
    <Button
      variant="contained"
      size="small"
      onClick={() => setSelectedBarco(barco)}
      disabled={disabled}
      sx={{ backgroundColor: barco.color }}
    >
      {text}
    </Button>
  );
}
