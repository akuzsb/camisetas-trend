import React from "react";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";


export const AddItemButton = ({ product }) => {
  const { addItem } = useCartContext();
  
  return (
    <Button variant="primary" onClick={() => addItem(product)} >
      Agregar al carrito
    </Button>
  );
};
