import React from "react";

export const ItemMocks = ({ mock }) => {
    // Verifica que `mock.proudcts` sea un array antes de usarlo
    const products = Array.isArray(mock.proudcts) ? mock.proudcts : [];
    const productCount = products.length;

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src={mock.image} className="card-img-top" alt={mock.first_name} />
                <div className="card-body">
                    <h5 className="card-title">{mock.first_name} {mock.last_name}</h5>
                    <p className="card-text">Sexo: {mock.sex}</p>
                    <p className="card-text">Fecha de Nacimiento: {new Date(mock.birthDate).toLocaleDateString()}</p>
                    <p className="card-text">Teléfono: {mock.phone}</p>
                    <p className="card-text">Email: {mock.email}</p>

                    {/* Mostrar el conteo de productos */}
                    <div className="mt-3">
                        <h6>Productos del Usuario: {productCount} {productCount === 1 ? 'producto' : 'productos'}</h6>

                        {/* Mostrar los detalles de los productos */}
                        {products.length > 0 ? (
                            <ul className="list-group">
                                {products.map(product => (
                                    <li key={product.id} className="list-group-item">
                                        <img src={product.thumbnail} alt={product.title} className="img-thumbnail" style={{ width: '50px', height: '50px' }} />
                                        {product.title} - {product.price}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No hay productos disponibles.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};