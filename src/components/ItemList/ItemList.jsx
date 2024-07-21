import React from "react"
import { Item } from "../Item/Item"

export const ItemList = ({products}) => {
    return(
        <div className="container mt-5">
            <div className="row">
                {products.map(product => (<Item key={product._id} product={product}/>))}
            </div>
        </div>
    )
}