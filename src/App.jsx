import React from "react";
import { MainLayout } from "./layouts";
import { MainRoutes } from "./routes/MainRoutes";
import  {CartProvider} from "./context/CartContext";

export default function App() {
  return (
    
      <CartProvider>
        <MainLayout>
          <MainRoutes />
        </MainLayout>
      </CartProvider>
    
  );
}
