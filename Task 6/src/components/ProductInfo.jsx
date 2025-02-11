import React from "react";
const ProductInfo=()=>{
    const product={
        name:"Wireless Mouse",
        price:"500",
        availability:"In stock"
    };
    return (
        <div>
            <h1>Product Information</h1>
            <p><strong>Name:</strong>:{product.name}</p>
            <p><strong>Price:</strong>{product.price}</p>
            <p><strong>Availability:</strong>{product.availability}</p>
        </div>
    )
}
export default ProductInfo;