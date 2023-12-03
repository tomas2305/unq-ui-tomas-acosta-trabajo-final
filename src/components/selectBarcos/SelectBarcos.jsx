import "./selectBarcos.css";
import { barcosDisponibles } from "../../context/game/barcos";
import SelectBarcoBtn from "../selectBarcoBtn/SelectBarcoBtn";
import { useGameContext } from "../../context/game/useGameContext";
import { Button } from "@mui/material";
import Rotate90DegreesCwIcon from "@mui/icons-material/Rotate90DegreesCw";

export default function SelectBarcos() {
  const { selectedBarco } = useGameContext();

  const handleTurn = () => {
    if (selectedBarco) {
      selectedBarco.horizontal = !selectedBarco.horizontal;
    }
  };

  return (
    <div className="container">
      <div className="buttons-container">
        {barcosDisponibles.map((barco) => (
          <SelectBarcoBtn text={barco.titulo} barco={barco} key={barco.tipo} />
        ))}
        <Button variant="contained" onClick={handleTurn}>
          <Rotate90DegreesCwIcon fontSize="small" />
        </Button>
      </div>
    </div>
  );
}
