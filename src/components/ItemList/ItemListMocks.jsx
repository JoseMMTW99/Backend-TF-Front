import React from "react";
import { ItemMocks } from "../Item/ItemMocks";

export const ItemListMocks = ({ mocks }) => {
    console.log('Mocks:', mocks); // Verifica el contenido de mocks
    return (
        <div className="container mt-5">
            <div className="row">
                {Array.isArray(mocks) && mocks.length > 0 ? (
                    mocks.map(mock => (
                        <ItemMocks key={mock._id} mock={mock} />
                    ))
                ) : (
                    <p>No se encontraron datos.</p>
                )}
            </div>
        </div>
    );
};
