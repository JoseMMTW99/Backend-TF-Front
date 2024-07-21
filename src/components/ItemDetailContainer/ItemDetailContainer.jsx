import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { pid } = useParams();

    const getProduct = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/products/${pid}`);
            if (!response.ok) {
                throw new Error('Product not found');
            }
            const data = await response.json();
            console.log(data); // Verificar qué tipo de datos se están recibiendo
            return data.payload; // Asumiendo que el servidor devuelve un objeto con una propiedad 'payload'
        } catch (error) {
            console.error('Error fetching product:', error);
            return {}; // Devuelve un objeto vacío en caso de error
        }
    };

    useEffect(() => {
        getProduct().then(res => setProduct(res));
    }, []);

    return (
        <div>
            <h1>Item Detail Container</h1>
            {/* Aquí puedes mostrar los detalles del producto */}
            <p>Nombre: {product.name}</p>
            <p>Descripción: {product.description}</p>
            <p>Precio: {product.price}</p>
            <p>Categoría: {product.category}</p>
        </div>
    );
};