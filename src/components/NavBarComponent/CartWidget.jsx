import React from "react";
import { Button, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

// carrito de compras, con numero de items harcodeado 

export const CartWidget = ({countCart}) => {
  return (
    <Button variant="outline-light p-2 ">
      <FaShoppingCart className="mx-1" title="Ver carrito" />
      <Badge pill bg="secondary mx-1">
        {countCart}
      </Badge>
    </Button>
  );
};
