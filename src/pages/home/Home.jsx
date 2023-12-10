import TableroJugador from "../../components/tablero-jugador/TableroJugador";
import { Container } from "@mui/material";
import "./home.css";
import SelectBarcos from "../../components/selectBarcos/SelectBarcos";
import TableroEnemigo from "../../components/tablero-enemigo/TableroEnemigo";

export default function Home() {
  return (
    <Container className="home-page">
      <div className="game-container">
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
