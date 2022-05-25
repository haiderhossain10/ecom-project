import React from "react";

const ProductItem = ({ img, title, price, quantity }) => {
    return (
        <div className="product-item">
            <img src={img} alt="product" />
            <div className="product-info">
                <h4>{title}</h4>
                <p>&#8377; {price}</p>
            </div>
            <div className="product-quantity">
                <button>-</button>
                <span>{quantity}</span>
                <button>+</button>
            </div>
            <p>&#8377; {price * quantity}</p>
        </div>
    );
};

export default ProductItem;
