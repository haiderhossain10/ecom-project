/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Layout from "../components/layout/Layout";
import { BsFacebook, BsWhatsapp, BsTwitter, BsPinterest } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../store/features/productSlice";

const Cart = () => {
    const param = useParams();
    const productData = useSelector((state) => state.product.products);
    const addedProduct = useSelector((state) => state.product.addedCart);
    const dispatch = useDispatch();
    const [getQuan, setQuan] = useState(1);

    const quanHandler = (e) => {
        setQuan(e.target.value);
        dispatch(updateQuantity({ id: param.id, quan: parseInt(getQuan) + 1 }));
    };

    const singleProduct = productData.filter((item) => {
        return parseInt(item.id) === parseInt(param.id);
    });

    const addToCartHandler = () => {
        dispatch(addToCart(singleProduct[0]));
    };

    return (
        <>
            <Layout>
                <div className="view-cart-btn">
                    <Link to="/view-cart">
                        <button>View Cart ({addedProduct.length})</button>
                    </Link>
                </div>
                <div className="cart-box">
                    <div className="container">
                        <div className="cart-content">
                            <div className="cart-left">
                                <img
                                    src={singleProduct[0].image}
                                    alt="product"
                                />
                            </div>
                            <div className="cart-right">
                                <h4>{singleProduct[0].name}</h4>
                                <h2>
                                    &#8377;
                                    {(
                                        singleProduct[0].price *
                                        singleProduct[0].quantity
                                    ).toFixed(2)}
                                </h2>
                                <div className="cart-info">
                                    <p>Meterial - Phone</p>
                                    <p>Color - Black</p>
                                </div>
                                <p>{singleProduct[0].description}</p>
                                <div className="cart-quantity">
                                    <p>Quantity</p>
                                    <input
                                        type="number"
                                        min="1"
                                        max="10"
                                        value={getQuan}
                                        onChange={quanHandler}
                                    />
                                </div>
                                <div className="cart-btn">
                                    <button onClick={addToCartHandler}>
                                        Add To Cart
                                    </button>
                                    <button>Buy Now</button>
                                </div>
                                <div className="product-share">
                                    <a href="#">
                                        <BsFacebook />
                                    </a>
                                    <a href="#">
                                        <BsWhatsapp />
                                    </a>
                                    <a href="#">
                                        <BsTwitter />
                                    </a>
                                    <a href="#">
                                        <BsPinterest />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Cart;
