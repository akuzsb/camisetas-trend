import React from "react";
import { MainLayout } from "./layouts";
import { ItemList } from "./components/ListContainer/ItemList";

function App() {
  return (
    <>
      <MainLayout>
        <ItemList greeting="Hello World" />
      </MainLayout>
    </>
  );
}

export default App;
