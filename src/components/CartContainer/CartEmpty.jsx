import { Button, Alert, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
export const CartEmpty = () => {
    return (
        <div className="container">
        <h1>Carrito</h1>
        <Alert variant="secondary">
            <Col className='col text-center'>
            <p >Tu carrito está vacío :(</p>
            <Link to="/">
                <Button variant="primary">Volver al inicio</Button>
            </Link>
            </Col>
        </Alert>
        </div>
    );
    };
