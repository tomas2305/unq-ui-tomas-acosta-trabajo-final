import WaterIcon from "@mui/icons-material/Water";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import "./disparo.css";
import { useEffect, useState } from "react";

export default function Disparo({ esAcertado }) {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMounted(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`disparo ${mounted ? "disparo-focus" : ""}`}>
      {esAcertado ? <WhatshotIcon /> : <WaterIcon />}
    </div>
  );
}
