import { Container } from "@mui/material";
import "./home.css";
import Tablero from "../../components/tablero/Tablero";
import { useState } from "react";

export default function Home() {
  const [tablero, setTablero] = useState(() => {
    const filas = Array(10).fill(null);
    const tableroInicial = filas.map((fila, filaIndex) => {
      return {
        nroFila: filaIndex,
        celdas: Array(10)
          .fill(null)
          .map((celda, colIndex) => {
            return {
              nroCol: colIndex,
              contenido: null,
            };
          }),
      };
    });
    console.log(tableroInicial);
    return tableroInicial;
  });

  const colocarBarco = (fila, columna) => {
    const nuevoTablero = [...tablero];
    nuevoTablero[fila].celdas[columna] = {
      nroCol: columna,
      contenido: "X",
    };
    setTablero(nuevoTablero);
  };

  return (
    <Container className="home-page">
      <div className="tableros-container">
        <Tablero tablero={tablero} onClickCelda={colocarBarco} />
      </div>
    </Container>
  );
}
