import React from "react";
import { useParams } from "react-router-dom";

export const Products = () => {
    const { id } = useParams();
    return (
        <>
        <h1>Products</h1>
        <p>Product ID: {id}</p>
        </>
    );
    };