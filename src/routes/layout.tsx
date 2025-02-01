import { Outlet } from "react-router-dom";

export const  RootLayout: React.FC = () => {
    return (
      <div className="h-full w-full">
        <Outlet/>
      </div>
    );
  };