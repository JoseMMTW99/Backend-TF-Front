import React from "react";
import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";

export const ItemListConteiner = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/products/json');
            const data = await response.json();
            return data; // Devuelve directamente el array de productos recibidos
        } catch (error) {
            console.error('Error fetching products:', error);
            return []; // Devuelve un array vacío en caso de error
        }
    };

    useEffect(() => {
        getProducts().then(products => setProducts(products));
    }, []);

    return (
        <ItemList products={products}/>
    );
};