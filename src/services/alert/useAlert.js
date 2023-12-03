import { useAlertContext } from "../../context/alert/useAlertContext";

export default function useAlert() {
  const { setAlertSeverity, setMessage, setOpen } = useAlertContext();

  const sendAlert = (message, severity) => {
    setAlertSeverity("info");
    setMessage(message);
    if (severity) setAlertSeverity(severity);
    setOpen(true);
  };

  return { sendAlert };
}
