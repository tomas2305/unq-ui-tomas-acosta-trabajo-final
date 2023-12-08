import "./celda.css";

export default function Celda({ contenido, onClick, enabled }) {
  const className = `celda ${enabled ? "celda-enabled" : "celda-disabled"}`;

  const handleOnClick = () => {
    if (enabled) {
      onClick();
    }
  };

  return (
    <button onClick={handleOnClick} className={className}>
      {contenido}
    </button>
  );
}
