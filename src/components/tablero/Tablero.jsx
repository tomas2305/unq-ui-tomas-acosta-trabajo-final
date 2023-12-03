import "./tablero.css";
import Celda from "../celda/Celda";

export default function Tablero({ tablero, onClickCelda }) {
  return (
    <div className="tablero">
      <div className="tablero">
        {tablero.map((fila) => (
          <div key={fila.nroFila} className="fila">
            {fila.celdas.map((celda) => (
              <Celda
                key={celda.nroCol}
                contenido={celda.contenido}
                onClick={() => onClickCelda(fila.nroFila, celda.nroCol)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
