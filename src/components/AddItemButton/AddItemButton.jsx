import React from "react";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import { ToastComponent } from "./Toast";

export const AddItemButton = ({ product }) => {
	const [show, setShow] = React.useState(false);
	const { addItem } = useCartContext();
  
	const handleCloseToast = () => {
	  setShow(false);
	};
  
	const handleAddItem = (product) => {
	  addItem(product);
	  setShow(true);
	};
  
	return (
	  <>
		<Button variant="primary" onClick={() => handleAddItem(product)}>
		  Agregar al carrito
		</Button>
		<ToastComponent mostrar={show} onClose={handleCloseToast} msj='Agregado al carrito!' />
	  </>
	);
  };