import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [user, setUser] = useState({});
    const [products, setProducts] = useState([]);
    const { pid } = useParams();

    const getUserAndProducts = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/users/${pid}`);
            if (!response.ok) {
                throw new Error('User not found');
            }
            const data = await response.json();
            console.log(data); // Verificar qué tipo de datos se están recibiendo
            setUser(data.payload);
            setProducts(data.payload.proudcts || []); // Asumiendo que los productos están en `proudcts`
        } catch (error) {
            console.error('Error fetching user and products:', error);
        }
    };

    useEffect(() => {
        getUserAndProducts();
    }, [pid]);

    return (
        <div>
            <h1>Item Detail Container</h1>
            {/* Aquí puedes mostrar los detalles del usuario */}
            <p>Nombre: {user.first_name} {user.last_name}</p>
            <p>Sexo: {user.sex}</p>
            <p>Fecha de Nacimiento: {new Date(user.birthDate).toLocaleDateString()}</p>
            <p>Teléfono: {user.phone}</p>
            <p>Email: {user.email}</p>
            <h6 className="mt-3">Productos:</h6>
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product.id} className="mt-2">
                        <img src={product.thumbnail} alt={product.title} className="img-fluid mb-2" />
                        <p className="mb-0">Nombre: {product.title}</p>
                        <p className="mb-0">Descripción: {product.description}</p>
                        <p className="mb-0">Precio: ${product.price}</p>
                        <p className="mb-0">Departamento: {product.dapartament}</p>
                        <p className="mb-0">Stock: {product.stock}</p>
                    </div>
                ))
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
};