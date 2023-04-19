import  {useState} from "react";
import { Toast } from "react-bootstrap";

export const ToastComponent = ({show, setShow, title, body}) => {
    const [showA, setShowA] = useState(show);

    return (
        <Toast onClose={() => setShowA(false)} show={showA} delay={3000} autohide>
            <Toast.Header>
                <strong className="me-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{body}</Toast.Body>
        </Toast>
    );
};
