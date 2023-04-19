import React from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import {Loader} from "../Loader/Loader";
import {Item} from "./Item";


export const ItemList = () => {
  const [ProductsData, setProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, 'productos');
    getDocs(itemCollection).then((products) => {
      if (products.length === 0) {
        console.log("No products");
      }

      setProductsData(
        products.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        
      );
      setLoading(false);
    });
  }, []);
  const { id } = useParams();
  const products = id
    ? ProductsData.filter((product) => product.categoria === id)
    : ProductsData;

    return (
      loading ? <Loader /> :
      <div className="container">
        <Row className="justify-content-md-center">
          {products.map((product) => (
            <Col xs={12} md={6} lg={4}  key={product.id} >
              <Item item={product} />
            </Col>
          ))}
        </Row>
      </div>
    );
};