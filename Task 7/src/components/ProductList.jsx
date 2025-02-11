import React from "react";
const ProductList=()=>{
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
    ];
    return (
        <div>
            <h1>Product List</h1>
            <ol>
                {products.map((product)=>{
                    return <li key={product.id}>{product.name} - Price:{product.price}</li>
                })}
            </ol>
        </div>
    )
}
export default ProductList;