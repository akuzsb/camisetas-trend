import React from "react";
import { Row, Col, Badge, Image, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AddItemButton } from "../AddItemButton/AddItemButton";

export const ItemDetail = ({product}) => {
  const navigate = useNavigate();
  // precio a formato moneda
  product.precio = Number(product.precio);
  return (
    <Card className="m-4 shadow">
      <Row>
        <Col md={6}>
          <Image src={product.imagenUrl} fluid />
        </Col>
        <Col md={6}>
          <h1>{product.titulo}</h1>
          <Badge bg="secondary">{product.categoria}</Badge>
          <h2 className="m-2">{product.precio.toLocaleString("es-AR", {style: "currency",currency: "ARS",})}</h2>
          <p>Cantidad disponible: {product.stock}</p>
          <p>{product.descripcion}</p>
          
          <Button
            variant="secondary"
            className="m-2"
            onClick={() => navigate(-1)}
          >
            Volver
          </Button>

          <AddItemButton product={product} />
        </Col>
      </Row>
    </Card>
  );
};
