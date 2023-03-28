import React from "react";
import { Link } from "react-router-dom";
import { ItemListContainer } from "../components/ListContainer/ItemListContainer";

export const Home = () => {
  return (
    <div className="container">
      <ItemListContainer greeting="Hello from Home" />
    </div>
  );
};
