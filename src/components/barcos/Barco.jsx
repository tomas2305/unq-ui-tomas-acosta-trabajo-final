import "./barco.css";

export default function Barco({ tipo }) {
  const className = `barco ${tipo || ""}`;
  console.log(className);

  return <div className={className} />;
}
