import React from "react";
import { MainLayout } from "./layouts";
// import { ItemList } from "./components/ListContainer/ItemList";
import { MainRoutes } from "./routes";

export default function App() {
  return (
    <>
      <MainLayout>
        <MainRoutes />
      </MainLayout>
    </>
  );
}
