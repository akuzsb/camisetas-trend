import React from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { Loader } from "../Loader/Loader";


export const ItemDetailContainer = () => {
    const [product, setProduct] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const { id } = useParams();

    React.useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "productos", id);
        getDoc(docRef).then((doc) => {
            if (doc.exists()) {
                setProduct({ id: doc.id, ...doc.data() });
                setLoading(false);
            } else {
                setProduct({});
            }
        });
    }, [id]);

  return (
    loading ? <Loader /> :
        <ItemDetail product={product} />
    
    );
};
