import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ItemListCart } from "../CartContainer/ItemCartContainer";
import { CartEmpty } from "./CartEmpty";
import { formatPrice } from "../../utils/formatPrice";

export const CartContainer = ({ itemCount }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const TotalPrice = () => {
    let inicialPrice = 0;
    cart.forEach((item) => {
      inicialPrice += item.precio * item.qty;
    });
    return inicialPrice;
  }; 

  useEffect(() => {
    setCart(itemCount.products);
    setTotal(itemCount.qtyItems);

  }, [itemCount]);
  // console.log(itemCount);

  return  total === 0 ? (
    <CartEmpty /> 
  ) :
   (
    <div className="container">
      <h1>Carrito ({total})</h1>
      <div className="m-2">
        {cart.map((item) => (
          <ItemListCart key={item.id} item={item} />
        ))}
      </div>
      <h3>Total: {formatPrice(TotalPrice())} </h3>

      <div className="d-flex justify-content-end">
        <Link to="/checkout">
          <Button variant="primary">Finalizar compra</Button>
        </Link>
      </div>
    </div>
  );
};
