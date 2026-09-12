import { createContext } from "react";
import type { RaceContextValue } from "../types";

export const RaceContext = createContext<RaceContextValue | null>(null);
