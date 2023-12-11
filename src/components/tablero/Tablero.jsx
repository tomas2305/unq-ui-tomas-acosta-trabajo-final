import "./tablero.css";
import Celda from "../celda/Celda";
import { Typography } from "@mui/material";

export default function Tablero({ tablero, onClickCelda, enabled, focus }) {
  const letras = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const containerClassName = `tablero-container ${
    focus ? "tablero-focus" : ""
  }`;

  return (
    <div className={containerClassName}>
      <div className=" ">
        {letras.map((letra) => (
          <div className="letra-container" key={letra}>
            <Typography variant="letraCelda" className="letra">{letra}</Typography>
          </div>
        ))}
      </div>
      <div>
        <div className="fila">
          {tablero.map((fila) => (
            <div className="letra-container" key={fila.nroFila + 1}>
              <Typography variant="letraCelda" className="letra">
                {fila.nroFila + 1}
              </Typography>
            </div>
          ))}
        </div>
        {tablero.map((fila) => (
          <div key={fila.nroFila} className="fila">
            {fila.celdas.map((celda) => (
              <Celda
                key={`${celda.nroFila}-${celda.nroCol}`}
                contenido={celda.contenido}
                onClick={() => onClickCelda(celda)}
                enabled={enabled}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
