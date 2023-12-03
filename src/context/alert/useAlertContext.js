import { useContext } from "react";
import { alertContext } from "./alertContext";

export const useAlertContext = () => useContext(alertContext);
