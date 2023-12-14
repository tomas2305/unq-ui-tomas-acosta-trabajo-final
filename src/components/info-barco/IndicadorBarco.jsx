import NorthIcon from "@mui/icons-material/North";
import EastIcon from "@mui/icons-material/East";
import { Typography, Box } from "@mui/material";
import { useGameContext } from "../../context/game/useGameContext";
import "./indicadorBarco.css";

export function InfoBarco() {
  const { selectedBarco } = useGameContext();

  return (
    <div>
      {selectedBarco && (
        <Box
          className="indicador-container"
          sx={{ color: selectedBarco.color }}
        >
          <Typography
            variant="body2"
            color={selectedBarco.color}
            noWrap
            sx={{ fontWeight: 500 }}
          >
            Longitud del barco: {selectedBarco.longitud}
          </Typography>
          {selectedBarco.horizontal ? <EastIcon /> : <NorthIcon />}
        </Box>
      )}
    </div>
  );
}
