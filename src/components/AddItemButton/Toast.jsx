import React from "react";
import { Toast } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ToastComponent = ({ mostrar, onClose, msj }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(mostrar);
  }, [mostrar]);

  return (
    <Toast onClose={onClose} show={show} autohide delay={3000}>
      <Toast.Header>
        <strong className="me-auto">{msj}</strong>
      </Toast.Header>
      <Toast.Body>
        <Link to="/cart">Ir al carrito :)</Link>
      </Toast.Body>
    </Toast>
  );
};
