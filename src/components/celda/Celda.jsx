import { useGameContext } from "../../context/game/useGameContext";
import "./celda.css";

export default function Celda({ contenido, onClick }) {
  const { selectedBarco } = useGameContext();
  const className = `celda ${
    selectedBarco ? "celda-enabled" : "celda-disabled"
  }`;

  const handleOnClick = () => {
    if (selectedBarco) {
      onClick();
    }
  };

  return (
    <button onClick={handleOnClick} className={className}>
      {contenido}
    </button>
  );
}
