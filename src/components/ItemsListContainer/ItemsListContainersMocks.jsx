import React from "react";
import { useEffect, useState } from "react";
import { ItemListMocks } from "../ItemList/ItemListMocks";

export const ItemListContainerMocks = () => {
    const [mocks, setMocks] = useState([]);

    const getMocks = async () => {
        try {
            const response = await fetch('http://localhost:8000/mocks/users');
            const data = await response.json();
            return data.payload; // Devuelve directamente el array de usuarios recibidos
        } catch (error) {
            console.error('Error fetching mocks:', error);
            return []; // Devuelve un array vacío en caso de error
        }
    };

    useEffect(() => {
        getMocks().then(mocks => setMocks(mocks));
    }, []);

    return (
        <div>
            <h1 className="fw-bold text-center p-5">Mocks</h1>
            <ItemListMocks mocks={mocks}/>
        </div>
    );
};