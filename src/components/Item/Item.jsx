import React from "react";
import { Link } from "react-router-dom";

export const Item = ({product}) => {
    return(
        <div className="col-md-4 mb-4">
        <div className="card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Precio: ${product.price}</p>
                <p className="card-text">Categoría: {product.category}</p>
            </div>
            <div className="card-footer">
                <Link 
                to={`/detail/${product._id}`}
                className="btn btn-outline-dark">
                    Detalle
                </Link>
            </div>
        </div>
    </div>
    )
}