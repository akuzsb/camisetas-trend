import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProductsData } from "../json";
import { Row, Col } from "react-bootstrap";

import { Item } from "../components/ListContainer/Item";

export const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const products = id
    ? ProductsData.filter((product) => product.category === id)
    : ProductsData;
  return (
    <div className="container">
      <Row className="justify-content-md-center">
        {products.map((product) => (
          <Col xs={12} md={6} lg={4} xl={2} key={product.id}>
            <Item item={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
