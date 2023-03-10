import React from "react";
import { NavBarComponent } from "../components";

export const MainLayout = ({ children }) => {
  return (
    <>
     <div>

        <NavBarComponent />
        {children}
     </div>
    
    </>
  );
};
