import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  // item.price a formato moneda
  const price = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(item.precio);

  return (
    <Card className="m-2 shadow">
      <Card.Img
        variant="top"
        src={item.imagenUrl}
        alt={item.title}
        style={{ maxWidth: "100%" }}
      />
      <Card.Body>
        <Card.Title className="text-center">{item.titulo}</Card.Title>
        <Card.Text className="text-center">{price}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Row className="justify-content-center">
          <Col xs={12}>
            <Link to={`/item/${item.id}`}>
              <Button variant="primary">Comprar</Button>
            </Link>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
