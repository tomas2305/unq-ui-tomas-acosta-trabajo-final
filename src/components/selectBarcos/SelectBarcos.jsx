import "./selectBarcos.css";
import { barcosDisponibles } from "../../context/game/barcos";
import SelectBarcoBtn from "../selectBarcoBtn/SelectBarcoBtn";
import TurnBarcoBtn from "../turnBarcoBtn/TurnBarcoBtn";

export default function SelectBarcos() {
  return (
    <div className="container">
      <div className="buttons-container">
        {barcosDisponibles.map((barco) => (
          <SelectBarcoBtn text={barco.titulo} barco={barco} key={barco.tipo} />
        ))}
        <TurnBarcoBtn />
      </div>
    </div>
  );
}
