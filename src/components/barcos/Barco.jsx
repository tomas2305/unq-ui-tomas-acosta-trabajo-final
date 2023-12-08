import "./barco.css";

export default function Barco({ tipo }) {
  const className = `barco ${tipo || ""}`;

  return <div className={className} />;
}
