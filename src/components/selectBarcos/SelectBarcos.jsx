import "./selectBarcos.css";
import { barcosDisponibles } from "../../context/game/barcos";
import SelectBarcoBtn from "../selectBarcoBtn/SelectBarcoBtn";
import TurnBarcoBtn from "../turnBarcoBtn/TurnBarcoBtn";
import { useGameContext } from "../../context/game/useGameContext";

export default function SelectBarcos() {
  const { hasSetBarcos } = useGameContext();

  const buttonsContainerClass = `buttons-container ${
    !hasSetBarcos ? "buttons-container-focus " : ""
  }`;

  return (
    <div className="container">
      <div className={buttonsContainerClass}>
        {barcosDisponibles.map((barco) => (
          <SelectBarcoBtn text={barco.titulo} barco={barco} key={barco.tipo} />
        ))}
        <TurnBarcoBtn />
      </div>
    </div>
  );
}
