import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useGameContext } from "../../context/game/useGameContext";

export default function SelectBarcoBtn({ text, barco }) {
  const [disabled, setDisabled] = useState(false);
  const { barcos, setSelectedBarco } = useGameContext();

  useEffect(() => {
    const disabledValue = barcos.includes(barco);
    setDisabled(disabledValue);
  }, [barco, barcos]);

  return (
    <Button
      variant="contained"
      size="small"
      onClick={() => setSelectedBarco(barco)}
      disabled={disabled}
    >
      {text}
    </Button>
  );
}
