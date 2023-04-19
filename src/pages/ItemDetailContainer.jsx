import React from "react";
// import {  useParams } from "react-router-dom";
// import { Row, Col, Badge, Image, Button, Card } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { doc, getDoc, getFirestore} from 'firebase/firestore'
// import { Loader, AddItemButton } from "../components";
// import { useCartContext } from "../context/CartContext";

// export const ItemDetailContainer = () => {
//   const { itemCount } = useCartContext();
//   console.log(itemCount);


//   const navigate = useNavigate();
//   const { id } = useParams();
//   const [product, setProduct] = React.useState({});
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     const db = getFirestore();
//     const docRef = doc(db, 'productos', id);
//      getDoc(docRef)
//     .then((doc) => {
//       if (doc.exists()) {

//         setProduct({ id: doc.id, ...doc.data() })
//         setLoading(false);
//       } else {
//         setProduct({});
//       }
//     })
    
//   }, [id]);
//   return (
//     loading ? <Loader /> :
//     <div className="container">
//       <Card className="m-4">
//         <Row>
//           <Col md={6}>
//             <Image src={product.imagenUrl} fluid />
//           </Col>
//           <Col md={6}>
//             <h1>{product.titulo}</h1>
//             <Badge bg="secondary">{product.categoria}</Badge>
//             <h2 className="m-2">${product.precio}</h2>
//             <p>Cantidad disponible: {product.stock}</p>

//             <Button variant="secondary" className="m-2" onClick={() => navigate(-1)}>
//               Volver
//             </Button>
            
//             <AddItemButton product={product} />
//           </Col>
//         </Row>
//       </Card>
//     </div>
//   );
// };

import {ItemDetailContainer} from '../components/ItemDetail/ItemDetailContainer'

export const ItemDetailContainerPage = () => {
  return (
    <div className="container">
      <ItemDetailContainer />
    </div>
  );
}