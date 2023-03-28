import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../json";
import { Row, Col, Badge, Image, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const ItemDetailContainer = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = ProductsData.find((product) => product.id == id);
  console.log(product);
  return (
    <div className="container">
      <Card className="m-4">
        <Row>
          <Col md={6}>
            <Image src={product.imageUrl} fluid />
          </Col>
          <Col md={6}>
            <h1>{product.title}</h1>
            {/* <p>{product.category}</p> */}
            <Badge bg="secondary">{product.category}</Badge>
            <h2 className="m-2">${product.price}</h2>
            <p>Cantidad disponible: {product.stock}</p>

            <Button variant="secondary" className="m-2" onClick={() => navigate(-1)}>
              Volver
            </Button>
            <Button variant="primary" >
              Agregar al carrito
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
};
