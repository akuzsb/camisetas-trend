import React from "react";
import { useParams } from "react-router-dom";
import { ItemListContainer } from "../components/ListContainer/ItemListContainer";

export const Category = () => {
    const { id } = useParams();
    return (
        <>
        <h1>Category</h1>
        <p>Category ID: {id}</p>
        <ItemListContainer greeting="Hello from Category" />
        </>
    );
    };