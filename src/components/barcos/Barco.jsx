import "./barco.css";

export default function Barco({ barco }) {
  const className = `barco ${barco.tipo || ""}`;

  return <>{barco.invisible ? <></> : <div className={className} />}</>;
}
