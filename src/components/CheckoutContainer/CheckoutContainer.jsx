import React, {useState, useEffect} from "react";
import { useCartContext } from "../../context/CartContext";
import { Row, Col, Button, Card, Form, Alert } from "react-bootstrap";
import { formatPrice } from "../../utils/formatPrice";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { Loader } from "../Loader/Loader";
import { Link } from "react-router-dom";


export const CheckoutContainer = () => {
  // console.log(CartContext);
  const { itemCount, emptyCart } = useCartContext();
//   console.log(itemCount);

  const [Loading , setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [orderId, setOrderId] = useState("");
  const [complete, setComplete] = useState(false);


  useEffect(() => {
    setProducts(itemCount.products);
  }, [itemCount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // validar formulario

    

    // arma el objeto con los datos del formulario y los productos del carrito
    // y lo envía a firebase
    // redirige a la página de confirmación

    const buyer = {
        name: e.target[0].value,
        lastname: e.target[1].value,
        email: e.target[2].value,
        phone: e.target[3].value,
        address: e.target[4].value,
    };

    if (buyer.name === "" || buyer.lastname === "" || buyer.email === "" || buyer.phone === "" || buyer.address === "") {
        alert("Debe completar todos los campos");
        return;
    }
    if (products.length === 0) {
        alert("Debe agregar productos al carrito");
        return;
    }

    const newOrder = {
        buyer: buyer,
        items: products,
        date: new Date(),
        total: products.reduce((acc, item) => acc + item.qty * item.precio, 0),
    };

    UploadOrder({newOrder});

    };


    const UploadOrder = ({newOrder}) => {
        const db = getFirestore();
        const orders = collection(db,"orders");
        setLoading(true);
        addDoc(orders, newOrder).then(({id}) => {
            setOrderId(id);
        }).catch((error) => {
            console.log("Error al guardar la orden", error);
        }).finally(() => {
            emptyCart();
            setLoading(false);
            setComplete(true);
            console.log("Orden guardada");
            console.log(orderId);
        });
    };

  return Loading ?  <Loader /> :
    complete ? (
        <div>
            <h1>Compra realizada con éxito</h1>
            <Alert>
                <Alert.Heading>Gracias por su compra!</Alert.Heading>
                <p>
                    Su numero de orden es: {orderId}
                </p>
                <hr />
                <p className="mb-0">
                    En breve nos estaremos comunicando con usted para coordinar la entrega.
                </p>
                <Col className="text-center">
                    <Link to="/">
                        <Button variant="primary" className="text-center m-2">Volver al inicio</Button>
                    </Link>
                </Col>
            </Alert>
        </div>
    ) :
   (
   <div>
      <div>
        <h1>Checkout</h1>
      </div>
      <Row>
        <Col>
            <h3>Formulario</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su apellido" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese su telefono" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su direccion" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Col>
        <Col>
            <h3>Productos</h3>
            {products.map((item) => (
                
                <Card key={item.id} style={{ width: "24rem" }} className="my-2">
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.titulo}</Card.Title>
                        <Card.Text>
                            Cantidad: {item.qty} - {formatPrice(item.precio)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </Col>
        </Row>
    </div>
  );
};
