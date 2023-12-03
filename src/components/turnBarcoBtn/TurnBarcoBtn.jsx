import { Button } from "@mui/material";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";
import { useGameContext } from "../../context/game/useGameContext";
import { useEffect, useState } from "react";

export default function TurnBarcoBtn() {
  const { selectedBarco } = useGameContext();
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    setDisabled(!selectedBarco);
  }, [selectedBarco]);

  const handleTurn = () => {
    if (selectedBarco) {
      selectedBarco.horizontal = !selectedBarco.horizontal;
    }
  };

  return (
    <Button variant="contained" onClick={handleTurn} disabled={disabled}>
      <Rotate90DegreesCwIcon fontSize="small" />
    </Button>
  );
}
