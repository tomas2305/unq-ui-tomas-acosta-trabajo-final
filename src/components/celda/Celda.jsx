import "./celda.css";

export default function Celda({ contenido, onClick, className }) {
  return (
    <button onClick={onClick} className={`celda ${className}`}>
      {contenido}
    </button>
  );
}
