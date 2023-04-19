import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const FormNewProduct = () => {
  const [objeto, setObjeto] = React.useState({
    activo: true,
    descripcion: "",
    imagenUrl: "",
    precio: 0,
    stock: 0,
    titulo: "",
    categoria: "futbol",
    fecha : new Date()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObjeto((prevObjeto) => ({ ...prevObjeto, [name]: value }));
    // actualizar la fecha 
    setObjeto((prevObjeto) => ({ ...prevObjeto, fecha: new Date() }));
  };

  // cuando se envia el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const productCollection = collection(db, "productos");
    addDoc(productCollection, objeto).then(({ id }) => console.log(id)
    // reiniciar el formulario
    ).then(() => document.getElementById("formNewProduct").reset());
  };
  
  return (
    <Container>
      <Form id="formNewProduct" onSubmit={handleSubmit} className="m-2">
        <Form.Group>
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" name="titulo" onChange={handleChange} />
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            type="text"
            name="descripcion"
            onChange={handleChange}
          />
          <Form.Label>Precio</Form.Label>
          <Form.Control type="number" name="precio" onChange={handleChange} />
          <Form.Label>Stock</Form.Label>
          <Form.Control type="number" name="stock" onChange={handleChange}  />
          <Form.Label>Imagen</Form.Label>
          <Form.Control type="text" name="imagenUrl" onChange={handleChange} />
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" name="categoria" onChange={handleChange}  />
        </Form.Group>
        <Button variant="primary" className="m-2" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};
