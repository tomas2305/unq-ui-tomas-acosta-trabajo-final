import WaterIcon from "@mui/icons-material/Water";
import WhatshotIcon from "@mui/icons-material/Whatshot";

export default function Disparo({ esAcertado }) {
  return (
    <div className="">{esAcertado ? <WhatshotIcon /> : <WaterIcon />}</div>
  );
}
