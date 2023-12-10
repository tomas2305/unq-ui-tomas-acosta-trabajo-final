import TableroJugador from "../../components/tablero-jugador/TableroJugador";
import { Container, Typography } from "@mui/material";
import "./home.css";
import SelectBarcos from "../../components/selectBarcos/SelectBarcos";
import TableroEnemigo from "../../components/tablero-enemigo/TableroEnemigo";
import { useGameContext } from "../../context/game/useGameContext";

export default function Home() {
  const { mensaje } = useGameContext();

  return (
    <Container className="home-page">
      <div className="game-container">
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          {mensaje}
        </Typography>
        <div className="tableros-container">
          <TableroJugador />
          <TableroEnemigo />
        </div>
        <div className="select-barcos">
          <SelectBarcos />
        </div>
      </div>
    </Container>
  );
}
