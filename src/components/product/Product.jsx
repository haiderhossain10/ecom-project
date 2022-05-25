const Product = ({ img, title, price }) => {
    return (
        <div>
            <div className="product">
                <img src={img} alt="product" />
                <p>{title}</p>
                <p>&#8377; {price}</p>
            </div>
        </div>
    );
};

export default Product;
