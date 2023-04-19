import { Button, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const { itemCount } = useCartContext();
  return (
    <Link to="/cart">
    <Button variant="outline-light p-2 ">
      <FaShoppingCart className="mx-1" title="Ver carrito" />
      <Badge pill bg="secondary mx-1">
        {itemCount.qtyItems}
      </Badge>
    </Button>
    </Link>
  );
};
