import { Outlet } from "react-router";
import { MoviesContextProvider } from "./main/contexts/movies/provider";

export const Layout: React.FC = () => {
  return (
    <div className="content-wrapper">
      <MoviesContextProvider>
        <Outlet />
      </MoviesContextProvider>
    </div>
  );
};
