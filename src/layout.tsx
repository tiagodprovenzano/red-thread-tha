import { Outlet } from "react-router";

export const Layout: React.FC = () => {
  return (
    <div className="content-wrapper">
      <Outlet />
    </div>
  );
};
