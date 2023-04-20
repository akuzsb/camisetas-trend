import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
import { useCartContext } from "../../context/CartContext"



export const ItemListCart = ({ item }) => {
    const navigate = useNavigate();
    const { removeItem } = useCartContext();
    const handleRemoveItem = ({id}) => {
        removeItem({id});
        navigate("/cart");

    }

  const [itemCart, setItemCart] = useState([]);
  useEffect(() => {
    setItemCart(item);
  }, [item]);
  return (
    <section>
      <Row>
        <Col xs={2}>
        <Link to={`/item/${itemCart.id}`}>
          <img
            src={itemCart.imagenUrl}
            alt={itemCart.titulo}
            style={{ maxWidth: "100px" }}
          />
            </Link>
        </Col>
        <Col xs={10}>
          <Row>
            <Col>
              <Link to={`/item/${itemCart.id}`}>
                <p
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.5vw",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {itemCart.titulo}
                </p>
              </Link>
            </Col>
            
            <Col>
              <p>
                <span style={{ fontWeight: "bolder" }}>Cantidad: </span>
                {itemCart.qty}
              </p>
            </Col>
            <Col>
              <p>
                <span style={{ fontWeight: "bolder" }}>Subtotal: </span>
                {formatPrice(itemCart.precio * itemCart.qty)}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
                <p>
                    <span style={{ fontWeight: "bolder" }}>Precio unitario: </span>
                   {formatPrice(itemCart.precio)}
                </p>
            </Col>
            
          </Row>
          <Row>
          <Col>
                  <Button variant="outline-primary" className="btnCart" size="sm" onClick={() => handleRemoveItem(itemCart)}>Eliminar del carrito</Button>
                  <Link to={`/category/${itemCart.categoria}`}>
                    <Button variant="outline-primary"className="btnCart" size="sm">Mas productos de la categoria</Button>
                  </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <hr />
    </section>
  );
};
