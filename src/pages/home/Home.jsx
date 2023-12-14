import TableroJugador from "../../components/tablero-jugador/TableroJugador";
import { Container, Typography } from "@mui/material";
import "./home.css";
import SelectBarcos from "../../components/selectBarcos/SelectBarcos";
import TableroEnemigo from "../../components/tablero-enemigo/TableroEnemigo";
import { useGameContext } from "../../context/game/useGameContext";
import BarcosIndicador from "../../components/barcos/barcosIndicador/BarcosIndicador";
import { InfoBarco } from "../../components/info-barco/IndicadorBarco";

export default function Home() {
  const { mensaje, barcos, barcosEnemigo } = useGameContext();

  return (
    <Container className="home-page">
      <div className="game-container">
        <div>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {mensaje}
          </Typography>
        </div>
        <div className="container-space-around">
          <TableroJugador />
          <TableroEnemigo />
        </div>
        <div className="container-space-around">
          <div className="tablero-space indicador-barcos">
            <BarcosIndicador barcos={barcos} />
            <InfoBarco />
          </div>
          <div className="tablero-space">
            <BarcosIndicador barcos={barcosEnemigo} />
          </div>
        </div>
        <div className="container-space-around">
          <div className="tablero-space">
            <SelectBarcos />
          </div>
          <div className="tablero-space" />
        </div>
      </div>
    </Container>
  );
}
