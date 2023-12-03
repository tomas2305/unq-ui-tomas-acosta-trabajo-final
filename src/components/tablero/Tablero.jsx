import "./tablero.css";
import Celda from "../celda/Celda";

export default function Tablero({ tablero, onClickCelda }) {
  return (
    <div className="tablero-container">
      <div className="tablero">
        {tablero.map((fila) => (
          <div key={fila.nroFila} className="fila">
            {fila.celdas.map((celda) => (
              <Celda
                key={`${celda.nroFila}-${celda.nroCol}`}
                contenido={celda.contenido}
                onClick={() => onClickCelda(celda)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
