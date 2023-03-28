import React from "react";
import {  Image, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";


export const Item = ({ item }) => {
    // item.price a formato moneda
    const price = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
    }).format(item.price);

  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title text-center">{item.title}</h5>
        <Image src={item.imageUrl} alt={item.title} fluid="true"  />

        <p className="card-text text-center m-1">{price}</p>
        <Row>
        <Link to={`/item/${item.id}`} className="btn btn-primary ">
          Comprar
        </Link>

        </Row>
      </div>
    </div>
  );
};
