import SailingIcon from "@mui/icons-material/Sailing";
import "./barcosIndicador.css";

export default function BarcosIndicador({ barcos }) {
  return (
    <div className="container">
      {barcos.map((barco) => {
        return (
          <SailingIcon
            key={barco.tipo}
            className={barco.vidas !== 0 ? "barco-sano" : "barco-destruido"}
          />
        );
      })}
    </div>
  );
}
