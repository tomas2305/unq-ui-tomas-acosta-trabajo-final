import { useContext } from "react";
import { gameContext } from "./gameContext";

export const useGameContext = () => useContext(gameContext);
