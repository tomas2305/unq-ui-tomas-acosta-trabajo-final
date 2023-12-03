import { useMemo, useState } from "react";
import { alertContext } from "./alertContext";
import FixedAlert from "../../components/alert/FixedAlert";

export function AlertProvider({ children }) {
  const [message, setMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const [open, setOpen] = useState(false);

  const contextValue = useMemo(
    () => ({
      setMessage,
      setAlertSeverity,
      setOpen,
    }),
    []
  );

  return (
    <alertContext.Provider value={contextValue}>
      {message && (
        <FixedAlert
          setOpen={setOpen}
          open={open}
          message={message}
          severity={alertSeverity}
        />
      )}
      {children}
    </alertContext.Provider>
  );
}
