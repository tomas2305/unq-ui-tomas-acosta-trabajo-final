import "./selectBarcos.css";
import { barcosDisponibles } from "../../context/game/barcos";
import SelectBarcoBtn from "../selectBarcoBtn/SelectBarcoBtn";

export default function SelectBarcos() {
  return (
    <div className="container">
      <div className="buttons-container">
        {barcosDisponibles.map((barco) => (
          <SelectBarcoBtn text={barco.titulo} barco={barco} key={barco.tipo} />
        ))}
      </div>
    </div>
  );
}
