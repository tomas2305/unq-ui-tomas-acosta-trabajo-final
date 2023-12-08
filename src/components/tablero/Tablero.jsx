import "./tablero.css";
import Celda from "../celda/Celda";
import { Typography } from "@mui/material";

export default function Tablero({ tablero, onClickCelda, enabled }) {
  const letras = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  return (
    <div className="tablero-container">
      <div className=" ">
        {letras.map((letra) => (
          <div className="letra" key={letra}>
            <Typography variant="h5">{letra}</Typography>
          </div>
        ))}
      </div>
      <div>
        <div className="fila">
          {tablero.map((fila) => (
            <div className="letra" key={fila.nroFila + 1}>
              <Typography variant="h5">{fila.nroFila + 1}</Typography>
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
