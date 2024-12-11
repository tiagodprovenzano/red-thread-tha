import { createContext } from "react";
import { MoviesContextType } from "./type";

export const MoviesContext = createContext<MoviesContextType>(
  {} as MoviesContextType
);
